import { Injectable, ConflictException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';
import { NewsletterDto } from './newsletter.dto';

const SUBSCRIBERS_FILE = path.join(__dirname, '../../..', 'subscribers.json');

@Injectable()
export class NewsletterService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  private readSubscribers(): string[] {
    if (!fs.existsSync(SUBSCRIBERS_FILE)) return [];
    const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(data);
  }

  private writeSubscribers(emails: string[]) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(emails, null, 2));
  }

  async subscribe(dto: NewsletterDto) {
    const subscribers = this.readSubscribers();

    if (subscribers.includes(dto.email)) {
      throw new ConflictException('This email is already subscribed.');
    }

    subscribers.push(dto.email);
    this.writeSubscribers(subscribers);

    await this.transporter.sendMail({
      from: `"Beyzanur Kayaci" <${process.env.GMAIL_USER}>`,
      to: dto.email,
      subject: 'Welcome to my newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #eab308;">Hey there! 👋</h2>
          <p>Thanks for subscribing to my newsletter!</p>
          <p>You'll be the first to know about my latest projects, articles, and updates in tech & AI.</p>
          <br/>
          <p style="color: #555;">— Beyzanur</p>
        </div>
      `,
    });

    return { success: true, message: 'Subscribed successfully!' };
  }
}
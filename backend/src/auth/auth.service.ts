import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(password: string) {
    if (password !== process.env.ADMIN_PASSWORD) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = this.jwtService.sign({ role: 'admin' });
    return { access_token: token };
  }
}
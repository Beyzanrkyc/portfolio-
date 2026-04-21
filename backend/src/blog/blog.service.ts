import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
  ) {}

  findAll() {
    return this.postRepo.find({ order: { createdAt: 'DESC' } });
  }

  findPublished() {
    return this.postRepo.find({
      where: { published: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const post = await this.postRepo.findOneBy({ id });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  create(dto: CreatePostDto) {
    const post = this.postRepo.create(dto);
    return this.postRepo.save(post);
  }

  async update(id: number, dto: Partial<CreatePostDto>) {
    await this.postRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.postRepo.delete(id);
    return { success: true };
  }
}
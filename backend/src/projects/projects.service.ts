import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './projects.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
  ) {}

  findAll() {
    return this.projectRepo.find({ order: { createdAt: 'DESC' } });
  }

  findPublished() {
    return this.projectRepo.find({
      where: { published: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const project = await this.projectRepo.findOneBy({ id });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  create(dto: CreateProjectDto) {
    const project = this.projectRepo.create(dto);
    return this.projectRepo.save(project);
  }

  async update(id: number, dto: Partial<CreateProjectDto>) {
    await this.projectRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.projectRepo.delete(id);
    return { success: true };
  }
}
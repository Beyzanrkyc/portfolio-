import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column({ nullable: true })
  githubUrl: string;

  @Column({ nullable: true })
  liveUrl: string;

  @Column('simple-array', { nullable: true })
  technologies: string[];

  @Column({ default: true })
  published: boolean;

  @Column({ default: false })
  featured: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
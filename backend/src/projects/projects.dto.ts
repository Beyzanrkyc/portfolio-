export class CreateProjectDto {
  title: string;
  description: string;
  coverImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string[];
  published?: boolean;
  featured?: boolean;
}
export class CreatePostDto {
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage?: string;
  tags?: string[];
  published?: boolean;
  featured?: boolean;
  readTime?: number;
}
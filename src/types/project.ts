export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  type: 'desktop' | 'mobile';
  description?: string;
  technologies?: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

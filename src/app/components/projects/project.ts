export class Project {
  id: string;
  title: string;
  stack: string;
  description: string;
  githubUrl: string;
  logoUrl: string;
  demoUrl: string;
  isEditing: boolean;

  constructor(title: string, description: string, stack: string, githubUrl: string, logoUrl: string, demoUrl: string) {
    this.id = title;
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.githubUrl = githubUrl;
    this.demoUrl = demoUrl;
    this.logoUrl = logoUrl;
    this.isEditing = false;
  }
}

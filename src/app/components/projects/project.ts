export class Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  githubUrl: string;
  demoUrl: string;

  constructor(title: string, description: string, stack: string, githubUrl: string, demoUrl: string) {
    this.id = title;
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.githubUrl = githubUrl;
    this.demoUrl = demoUrl;
  }
}

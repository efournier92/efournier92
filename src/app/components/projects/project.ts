export class Project {
  id: string;
  title: string;
  logoUrlDark: string;
  logoUrlLight: string;
  stack: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  isEditing: boolean;

  constructor(title: string, description: string, stack: string, githubUrl: string, logoUrlDark: string, logoUrlLight: string, demoUrl: string) {
    this.id = title;
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.githubUrl = githubUrl;
    this.demoUrl = demoUrl;
    this.logoUrlDark = logoUrlDark;
    this.logoUrlLight = logoUrlLight;
    this.isEditing = false;
  }
}

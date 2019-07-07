export class Project {
  id: string;
  title: string;
  logoUrlDark: string;
  logoUrlLight: string;
  stack: Array<string>;
  description: string;
  githubUrl: string;
  demoUrl: string;
  weight: number;
  isEditing: boolean;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.stack = new Array<string>();
    this.githubUrl = '';
    this.demoUrl = '';
    this.logoUrlDark = '';
    this.logoUrlLight = '';
    this.weight = 0;
    this.isEditing = false;
  }
}

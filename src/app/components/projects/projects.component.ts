import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[];
  user: User;

  constructor(
    private projectsService: ProjectsService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.projectsService.projectsObservable.subscribe(
      (projects) => {
        this.allProjects = projects;
      }
    );
    this.authService.currentUserObservable.subscribe(
      (user: User) => this.user = user
    )
  }

  onCreateProject() {
    // let project = new Project("title", "description", "stack", "githubUrl", "demoUrl");
    // this.projectsService.createProject(project);
  }
}

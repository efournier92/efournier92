import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { AnimationsService } from 'src/app/services/animations.service';

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
      (projects: Project[]) => {
        this.allProjects = projects.sort((a: Project, b: Project) => a.weight > b.weight ? 1 : a.weight === b.weight ? 0 : -1);
      }
    );
    this.authService.currentUserObservable.subscribe(
      (user: User) => this.user = user
    )
  }

  onCreateProject() {
    let project = new Project();
    this.projectsService.createProject(project);
  }
}

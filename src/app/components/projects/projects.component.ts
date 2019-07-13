import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { AnimationsService } from 'src/app/animations.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isLoading: boolean = true;
  allProjects: Project[];
  user: User;

  constructor(
    private projectsService: ProjectsService,
    private authService: AuthService,
    private animationsService: AnimationsService,
  ) { }

  ngOnInit() {
    this.projectsService.projectsObservable.subscribe(
      (projects: Project[]) => {
        this.allProjects = projects.sort((a: Project, b: Project) => a.weight > b.weight ? 1 : a.weight === b.weight ? 0 : -1);
        this.animationsService.sleep(500).then(
          () => this.isLoading = false
        )
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

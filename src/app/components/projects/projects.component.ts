import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[];

  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.projectsService.projectsObservable.subscribe(
      (projects) => {
        this.allProjects = projects;
      }
    );
  }

  onCreateProject() {
    let project = new Project("title", "description", "stack", "githubUrl", "demoUrl");

    this.projectsService.createProject(project);
  }

}

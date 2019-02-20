import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projects: ProjectsService,
  ) { }

  ngOnInit() {
    let project = new Project();
    this.projects.createProject(project);
  }

}

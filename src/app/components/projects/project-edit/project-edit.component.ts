import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  @Input()
  project: Project;

  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() { }

  saveProject(project: Project): void {
    project.isEditing = false;
    this.projectsService.updateProject(project);
  }

  deleteProject(project: Project): void {
    project.isEditing = false;
    this.projectsService.deleteProject(project);
  }

  cancelProjectEdit(project: Project): void {
    project.isEditing = false;
  }
}

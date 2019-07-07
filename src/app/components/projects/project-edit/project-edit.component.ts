import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  @Input()
  project: Project;
  @Input()
  totalProjects: number;
  weights: number[];
  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];

  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    const totalWeights = this.totalProjects + 1;
    this.weights = Array(totalWeights).fill(0).map((x, i) => i);
  }

  saveProject(project: Project): void {
    project.isEditing = false;
    this.projectsService.updateProject(project);
  }

  addStackTech(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if (!this.project.stack)
      this.project.stack = new Array<string>();
    if ((value || '').trim()) {
      this.project.stack.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }


  removeStackTech(tech: string): void {
    console.log('hit');
    this.project.stack = this.project.stack.filter(stackTech => stackTech !== tech);
  }

  deleteProject(project: Project): void {
    project.isEditing = false;
    this.projectsService.deleteProject(project);
  }

  cancelProjectEdit(project: Project): void {
    project.isEditing = false;
  }
}

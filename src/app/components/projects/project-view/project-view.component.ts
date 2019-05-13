import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  @Input()
  project: Project;
  isDarkTheme: boolean;

  constructor(
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.session.isDarkThemeObservable.subscribe(
      (isDarkTheme: boolean) => this.isDarkTheme = isDarkTheme
    )
  }

  toggleProjectEditable() {
    this.project.isEditing = !this.project.isEditing;
    console.log(this.project);
  }
}

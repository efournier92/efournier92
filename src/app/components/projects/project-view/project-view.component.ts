import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { SessionService } from 'src/app/services/session.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  @Input()
  project: Project;
  user: User;
  isDarkTheme: boolean;

  constructor(
    private auth: AuthService,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.session.isDarkThemeObservable.subscribe(
      (isDarkTheme: boolean) => this.isDarkTheme = isDarkTheme
    )
    this.auth.currentUserObservable.subscribe(
      (user: User) => this.user = user
    )
  }

  toggleProjectEditable() {
    this.project.isEditing = !this.project.isEditing;
    console.log(this.project);
  }
}

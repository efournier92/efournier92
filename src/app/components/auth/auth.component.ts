import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.currentUserObservable.subscribe(
      (user: User) => this.user = user
    )
  }
}

import { Component, OnChanges, OnInit } from '@angular/core';
import { User } from './objects/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Audible';
  user!:User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user)
  }

  logout(): void {
    // Write code for logging out
  }
}

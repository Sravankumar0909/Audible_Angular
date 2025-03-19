import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../objects/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user!: User;
  constructor( private userService: UserService){}
  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user);
    // Write required logic to fetch customer details
  }

}

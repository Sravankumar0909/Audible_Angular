import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../objects/user';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{

  passwordForm!: FormGroup
  errorMessage!: String
  user!: User

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user);
    // Create change password form controls
  }

  changePassword() {
    // write logic to change password
  }
}


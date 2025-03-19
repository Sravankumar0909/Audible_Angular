import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  forgotPasswordForm!:FormGroup;
  errorMessage!:string;

  constructor(){}

  ngOnInit(): void {
    // Create forgot password form controls
  }

  resetPassword(){
    // Write logic to implement forgot password
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupSuccessDialogComponent } from './signup-success-dialog/signup-success-dialog.component';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  pwd!: string;
  email!: string;
  hide: boolean = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private dialog: MatDialog
  ) {}

  login!: FormGroup;

  submit() {
    console.log(this.email + ' ' + this.pwd);
    this.loginService.login(this.email, this.pwd).subscribe((res) => {
      if (res) {
        console.log('Logged in ');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 3000);
      }
      switch (this.loginService.loginStatus) {
        case 1:
          this.openDialog('Successfully loggedIn!');
          break;
        case 2:
          this.openDialog('Invalid Password');
          break;
        case 3:
          this.openDialog('Invalid credentials - Account does not exist');
          break;
        default:
          this.openDialog('Uh-Oh Something went wrong!!');
      }
    });
  }
  openDialog(message: string) {
    this.dialog.open(SignupSuccessDialogComponent, {
      width: '300px',
      data: { message: message },
    });
    setTimeout(() => this.close(), 3000);
  }
  close() {
    this.dialog.closeAll();
  }
}

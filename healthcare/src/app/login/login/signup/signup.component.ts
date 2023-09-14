import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignupSuccessDialogComponent } from '../signup-success-dialog/signup-success-dialog.component';
import { SignupService } from 'src/app/service/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hide: boolean = true;

  email!: string;
  name!: string;
  pwd!: string;
  cpwd!: string;
  passwordsMatchError: boolean = false;
  pwderror: any;
  ngOnInit(): void {
    this.pwderror = <HTMLElement>document.getElementById('pwderror');
  }
  submit() {
    console.log(this.pwd,this.cpwd)
    this.service
      .signup(this.email, this.pwd, this.name, this.cpwd)
      .subscribe((result) => {
        if (result) {
          console.log('Signup successful');
          this.openSuccessDialog('You have signed Up Successfully');

          setTimeout(() => {
            this.close();

            this.route.navigate(['/login']);
          }, 3000);
          // Perform any additional actions on success, such as navigating to a different page
        } else {
          console.log('Signup failed');
          this.openSuccessDialog("Error - Passwords dont match");

          // Display an error message to the user or perform any other error handling
        }
      });
  }
  constructor(
    private service: SignupService,
    private route: Router,
    private dialog: MatDialog
  ) {}

  validatePasswords() {
    // console.log(this.cpwd!=this.pwd +""+this.cpwd+""+this.pwd)
    console.log(this.pwd + '' + this.cpwd);
    if (this.cpwd != this.pwd) {
      this.pwderror.style.display = 'block';
    } else {
      console.log(this.cpwd != this.pwd);
      this.pwderror.style.display = 'none';
    }
  }
  openSuccessDialog(message: string): void {
    const dialogRef = this.dialog.open(SignupSuccessDialogComponent, {
      width: '300px',
      data: { message: message }, // Pass dialogRef to the dialog component
    });
    setTimeout(() => {
      this.close();
    }, 3000);
  }
  close() {
    this.dialog.closeAll();
  }
}

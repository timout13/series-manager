import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  errMsg!: string;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = 'Administrateur';
    this.password = 'azerty';
  }

  onSubmitAuthForm(): void {
    //reset errMsg
    this.errMsg = '';
    this.authservice
      .signIn(this.username, this.password)
      .then(() => {
        this.router.navigateByUrl('/series');
      })
      .catch((errMsg) => {
        //rej()
        this.errMsg = errMsg;
      });
  }
}

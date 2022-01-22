import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isConnected!: boolean;
  tokenSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe(
      (newTokenValue: string) => {
        //listen changes on the token
        this.isConnected = !!newTokenValue;
      }
    );
  }

  //On click apply the f() signOut
  onClickSignOut(): void {
    this.authService.signOut().then(() => {
      this.router.navigateByUrl('');
    });
  }

  //Destroy the token when page is reloaded or else
  ngOnDestroy(): void {
    this.tokenSub.unsubscribe();
  }
}

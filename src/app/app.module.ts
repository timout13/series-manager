import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';
import { SerieDetailsComponent } from './views/serie-details/serie-details.component';
import { SerieEditComponent } from './views/serie-edit/serie-edit.component';
import { SerieNewComponent } from './views/serie-new/serie-new.component';
import { SerieListComponent } from './views/serie-list/serie-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { AuthService } from './services/auth/auth.service';
import { SerieService } from './services/serie/serie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    SerieDetailsComponent,
    SerieEditComponent,
    SerieNewComponent,
    SerieListComponent,
    HeaderComponent,
    SerieFormComponent,
    CommentFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService, SerieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

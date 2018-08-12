import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [AppComponent, UserComponent, ErrorComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}

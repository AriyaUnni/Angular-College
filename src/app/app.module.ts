import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudententryComponent } from './studententry/studententry.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:StudententryComponent
  },
  {
    path:"search",component:SearchstudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudententryComponent,
    NavbarComponent,
    SearchstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

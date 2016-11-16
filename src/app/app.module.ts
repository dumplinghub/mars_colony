import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { EncountersComponent } from './encounters/encounters.component';
import { ReportComponent } from './report/report.component';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes : Routes = [
  { path: '', component: WelcomeComponent},
   { path: 'register', component: RegisterComponent},
    { path: 'encounters', component: EncountersComponent},
     { path: 'report', component: ReportComponent},
     {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(routes),
  ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

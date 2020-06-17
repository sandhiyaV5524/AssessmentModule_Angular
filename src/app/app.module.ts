import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule,HttpClient,HTTP_INTERCEPTORS} from '@angular/common/http';


import { NgxChartsModule } from '@swimlane/ngx-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { CandidateComponent } from './candidate/candidate.component';
import { TrainerprojectComponent } from './trainerproject/trainerproject.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { TrainerassignmentComponent } from './trainerassignment/trainerassignment.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GradhomeComponent } from './gradhome/gradhome.component';
import { GradassignmentComponent } from './gradassignment/gradassignment.component';
import { GradprojectComponent } from './gradproject/gradproject.component';
import { SubmitprojectComponent } from './submitproject/submitproject.component';
import { ViewprojectsubmitComponent } from './viewprojectsubmit/viewprojectsubmit.component';
import { GenerateprojectscoreComponent } from './generateprojectscore/generateprojectscore.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

import { AboutComponent } from './about/about.component';
import { ViewassignmentsubmitComponent } from './viewassignmentsubmit/viewassignmentsubmit.component';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule,MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { GenerateassignmentscoreComponent } from './generateassignmentscore/generateassignmentscore.component';
import { MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthBasicAuthInterceptor } from './auth-basic-auth-interceptor';
import { TrendsComponent } from './trends/trends.component';
import { GradtrendsComponent } from './gradtrends/gradtrends.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrainerhomeComponent,
    CandidateComponent,
    TrainerprojectComponent,
    CreateprojectComponent,
    TrainerassignmentComponent,
    AssignmentComponent,
    GradhomeComponent,
    GradassignmentComponent,
    GradprojectComponent,
    SubmitprojectComponent,
    ViewprojectsubmitComponent,
    GenerateprojectscoreComponent,
    ScoreboardComponent,
    AboutComponent,
    ViewassignmentsubmitComponent,
    GenerateassignmentscoreComponent,
    TrendsComponent,
    GradtrendsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule
  
    
  ],
  providers: [
    AuthGuard,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AuthBasicAuthInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent],
  entryComponents:[ GenerateassignmentscoreComponent,GenerateprojectscoreComponent]
})
export class AppModule { }

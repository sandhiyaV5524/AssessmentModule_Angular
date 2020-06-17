import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
import { AuthGuard } from './auth.guard'
import { TrendsComponent } from './trends/trends.component';
import { GradtrendsComponent } from './gradtrends/gradtrends.component';




const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  
    {
      path:'login',
      component: LoginComponent
     },
     {
      path:'about',
      component: AboutComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'trainerhome',
      component:TrainerhomeComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'gradhome',
      component:GradhomeComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'candidate',
      component:CandidateComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'trainerproject',
      component:TrainerprojectComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'createproject',
      component: CreateprojectComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'trainerassignment',
      component:TrainerassignmentComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'gradassignment',
      component:GradassignmentComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'assignment',
      component:AssignmentComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'submitproject',
      component:SubmitprojectComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'gradproject',
      component:GradprojectComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'viewprojectsubmit',
      component:ViewprojectsubmitComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'generateprojectscore',
      component:GenerateprojectscoreComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'scoreboard',
      component:ScoreboardComponent,
      canActivate: [AuthGuard ]
     },
    
     {
      path:'viewassignmentsubmit',
      component:ViewassignmentsubmitComponent,
      canActivate: [AuthGuard ]
     },
    
     {
      path:'trends',
      component:TrendsComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'gradtrends',
      component:GradtrendsComponent,
      canActivate: [AuthGuard ]
     }
     
     
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

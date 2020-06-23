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
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { AddquestionComponent } from './addquestion/addquestion.component';




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
     
     },
     {
      path:'trainerhome',
      component:TrainerhomeComponent
     
     },
     {
      path:'gradhome',
      component:GradhomeComponent
      
     },
     {
      path:'candidate',
      component:CandidateComponent
         },
     {
      path:'trainerproject',
      component:TrainerprojectComponent
     
     },
     {
      path:'createproject',
      component: CreateprojectComponent
      
     },
     {
      path:'trainerassignment',
      component:TrainerassignmentComponent
      
     },
     {
      path:'gradassignment',
      component:GradassignmentComponent
   
     },
     {
      path:'assignment',
      component:AssignmentComponent
      
     },
     {
      path:'submitproject',
      component:SubmitprojectComponent
     
     },
     {
      path:'gradproject',
      component:GradprojectComponent
      
     },
     {
      path:'viewprojectsubmit',
      component:ViewprojectsubmitComponent
      
     },
     {
      path:'generateprojectscore',
      component:GenerateprojectscoreComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'scoreboard',
      component:ScoreboardComponent
     
     },
    
     {
      path:'viewassignmentsubmit',
      component:ViewassignmentsubmitComponent,
      canActivate: [AuthGuard ]
     },
    
     {
      path:'trends',
      component:TrendsComponent
      
     },
     {
      path:'gradtrends',
      component:GradtrendsComponent,
      canActivate: [AuthGuard ]
     },
     {
      path:'quiz',
      component:QuizComponent
      
     },
     {
      path:'quizhome',
      component:QuizhomeComponent
      
     },
     {
      path:'result',
      component:ResultComponent
      
     },
     {
      path:'addquestion',
      component:AddquestionComponent
      
     }
     
     
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

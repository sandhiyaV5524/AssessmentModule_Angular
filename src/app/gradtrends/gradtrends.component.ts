import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-gradtrends',
  templateUrl: './gradtrends.component.html',
  styleUrls: ['./gradtrends.component.scss']
})
export class GradtrendsComponent implements OnInit {
  constructor(private service: AssignmentService,private service1: ProjectService) { }
  view: any[] = [600, 400];
  trends:any;
  single;
  single2;
 
  username=localStorage.getItem('username');
 email=localStorage.getItem('useremail');

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel1 = 'Last Date';
  showYAxisLabel = true;
  yAxisLabel1 = 'Number of Assignments';
  timeline = true;
  xAxisLabel2 = 'Last Date';
 yAxisLabel2 = 'Number of Projects';
  
  colorScheme = {
    domain: ['violet','blue','green','orange','yellow']
  };

  colorScheme2 = {
    domain: ['indigo','red','grey','pink','brown']
  };
 
  showLabels = true;

  ngOnInit():void {
    this.service.chartAssignmentLastdate().subscribe((trends:any[])=> {
      console.log(trends)
      let data:any[]=[];
      for (let trend of trends){
        data.push({
          "name":trend.assign_last_date,
          "value":trend.assign_count
        })
      }
      this.single=data;
    });


    this.service1.chartProjectLastdate().subscribe((trends:any[])=> {
      console.log(trends)
      let data:any[]=[];
      for (let trend of trends){
        data.push({
          "name":trend.project_last_date,
          "value":trend.project_count
        })
      }
      this.single2=data;
    });

    
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
  constructor(private service: UserService) { }
  view: any[] = [600, 400];
  trends:any;
  single;
  single2;
 


  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel1 = 'Project Mark';
  showYAxisLabel = true;
  yAxisLabel1 = 'Number of Candidates';
  timeline = true;
  xAxisLabel2 = 'Assignment Mark';
  yAxisLabel2 = 'Number of Candidates';
  
  colorScheme = {
    domain: ['violet','blue','green','orange','yellow']
  };

  colorScheme2 = {
    domain: ['indigo','red','grey','pink','brown']
  };
 
  showLabels = true;

  ngOnInit():void {
    this.service.chartLocation().subscribe((trends:any[])=> {
      console.log(trends)
      let data:any[]=[];
      for (let trend of trends){
        data.push({
          "name":trend.mark,
          "value":trend.count
        })
      }
      this.single=data;
    });

    this.service.chartAssignmentMark().subscribe((trends2:any[])=> {
      console.log(trends2)
      let data:any[]=[];
      for (let trend2 of trends2){
        data.push({
          "name":trend2.mark1,
          "value":trend2.count1
        })
      }
      this.single2=data;
    });

  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
 
 
 
  

  assmailid: string;
  _assmailidBS = new BehaviorSubject<string>('');

  title: string;
  _titleBS = new BehaviorSubject<string>('');

  aid: number;
  _aidBS = new BehaviorSubject<number>(0);

  mailid: string;
  _mailidBS = new BehaviorSubject<string>('');

  
  comp2Val: string;
  _comp2ValueBS = new BehaviorSubject<string>('');


  comp3Val: string;
  _comp3ValueBS = new BehaviorSubject<string>('');

  comp4Val: string;
  _comp4ValueBS = new BehaviorSubject<string>('');

  asssmailid: string;
  _asssmailidBS = new BehaviorSubject<string>('');

  stitle: string;
  _stitleBS = new BehaviorSubject<string>('');

  said: number;
  _saidBS = new BehaviorSubject<number>(0);

  projectmailid: string;
  _projectmailidBS = new BehaviorSubject<string>('');

  projecttitle: string;
  _projecttitleBS = new BehaviorSubject<string>('');

  constructor() {
    this.mailid;
    this.comp2Val;
    this.comp3Val;
    this.comp4Val;
    this.assmailid;
    this.aid;
    this.title;
    this.asssmailid;
    this.said;
    this.stitle;
    this.projectmailid;
    this. projecttitle;

    this._mailidBS.next(this.mailid);
    this._comp2ValueBS.next(this.comp2Val);
    this._comp3ValueBS.next(this.comp3Val);
    this._comp4ValueBS.next(this.comp4Val);
    this._assmailidBS.next(this.assmailid);
    this._aidBS.next(this.aid);
    this._titleBS.next(this.title);

    this._asssmailidBS.next(this.asssmailid);
    this._saidBS.next(this.said);
    this._stitleBS.next(this.stitle);

    this._projectmailidBS.next(this.projectmailid);
    this._projecttitleBS.next(this. projecttitle);
    
  }

  updateComp1Val(val) {
    this.mailid = val;
    this._mailidBS.next(this.mailid);
    console.log("shared service 1 mail id");
    console.log( this.mailid);
  }
  updateComp2Val(val) {
    this.comp2Val = val;
    this._comp2ValueBS.next(this.comp2Val);
    console.log("shared service 2");
    console.log( this.comp2Val);
  }
  updateComp3Val(val) {
    this.comp3Val = val;
    this._comp3ValueBS.next(this.comp3Val);
    console.log("shared service 3");
    console.log( this.comp3Val);
  }
  updateComp4Val(mailId) {
    this.comp4Val = mailId;
    this._comp4ValueBS.next(this.comp4Val);
    console.log("shared service 4");
    console.log( this.comp4Val);
  }
  updateassmailid(assmailid: any) {
    this.assmailid = assmailid;
    this._assmailidBS.next(this.assmailid);
    console.log("shared service 4");
    console.log( this.assmailid);
  }
  
  updateaid(a_id: any) {
    this.aid = a_id;
    this._aidBS.next(this.aid);
    console.log("shared service 4");
    console.log( this.aid);
  }
  updatetitle(title: any) {
    this.title = title;
    this._titleBS.next(this.title);
    console.log("shared service 4");
    console.log( this.title);
  }



  updateasssmailid(asssmailid: any) {
    this.asssmailid = asssmailid;
    this._asssmailidBS.next(this.asssmailid);
    console.log("update assignment score shared service");
    console.log( this.asssmailid);
  }
  
  updatesaid(a_id: any) {
    this.said = a_id;
    this._saidBS.next(this.said);
    console.log("shared service 4");
    console.log( this.said);
  }
  updatestitle(stitle: any) {
    this.stitle = stitle;
    this._stitleBS.next(this.stitle);
    console.log("shared service 4");
    console.log( this.stitle);
  }


  updateprojectmailid(a_id: any) {
    this.projectmailid = a_id;
    this._projectmailidBS.next(this.projectmailid);
    console.log("shared service project mailid");
    console.log( this.projectmailid);
  }
  updateprojecttitle(stitle: any) {
    this. projecttitle = stitle;
    this._projecttitleBS.next(this.projecttitle);
    console.log("shared service project title");
    console.log( this.projecttitle);
  }
}

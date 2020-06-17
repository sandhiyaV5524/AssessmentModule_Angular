import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Login } from '../model/login';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth2: any;
  public name:any;
  user:User;
  msg: any;
  comp1Val: string;

  imgurl:string;
  username:string;
  email:string;
  userid:string;
  token:string;
 
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
 
  constructor(public _router: Router,private service: UserService, private sharedservice: SharedService,private ngZone: NgZone) {
         this.user=new User();
   }
 
  ngOnInit() {
 
   this.googleSDK();
  }


 
  prepareLoginButton() 
  {
 
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
  
        
        this.imgurl=profile.getImageUrl();
        this.username=profile.getName();
        this.email= profile.getEmail();
        this.userid=profile.getId();
        this.token=googleUser.getAuthResponse().id_token;
        this.sharedservice.updateComp1Val(this.email);

        
        localStorage.setItem('useremail',this.email);
         
        localStorage.setItem('username',this.username);
         let resp=this.service.checkUser(this.email);

         resp.subscribe(
          (response) => this.ngZone.run(() => {
            console.log(typeof(response));
            console.log(response);
            
            this.check (response);
          }
          ));
        });
  }
  check(response) {
    if(response=="Login sucessfull and User is Authenticated"){
           
      this.msg="Successfully Logged in";
      
      this.service.setLoggedIn(true);
      if(this.email=="v.sandhiya@accoliteindia.com")
     this._router.navigate(['/trainerhome']) ;
     else
     this._router.navigate(['/gradhome']) ;
        
       
      } 
      else{
        this.msg="Bad credentials";
        alert("Invalid Credentials")
        this._router.navigate(['/login']); 
      }
  }
    

  
  googleSDK() 
  {
 
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '961629187790-q67f9k8eqtvgfbc71e2vp4hi5ikjgut0.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }
 
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  
  }

  
}


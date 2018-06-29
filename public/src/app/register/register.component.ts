import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _httpService:HttpService , private _route:Router) { }

  createUser;


  ngOnInit() {
    this.createUser={email:"",password:"",first_name:"",last_name:""}
  }

  signUp(form){
    if(form){

     // console.log("creating user",this.createUser)
      let obs = this._httpService.signUp(this.createUser)
      obs.subscribe(data=>{
       // console.log("after signing up",data['_body'])
        
        if(data['_body']=='{"msg":"e"}'){
         // console.log("Emial Taken Already")
          this._route.navigate(['home'])
        }
          
        else{
         // console.log("User created");
          this._route.navigate(['home'])
        }
      })
      this.createUser={email:"",password:"",first_name:"",last_name:""}
    }
    else{"Error signUp Form"}
  }


  

}

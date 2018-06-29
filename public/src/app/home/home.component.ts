import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService:HttpService , private _route:Router,private _socket:Socket) { }

  ngOnInit() {
   
    let initDom= this._httpService.initDominos();
    initDom.subscribe(data=>{
    console.log(data)
    })
  }

  logOut(){
    let obs = this._httpService.logOut();
    obs.subscribe(data=>{
      console.log(data)
    })
  }
}

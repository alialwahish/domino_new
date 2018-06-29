import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Socket } from 'ng-socket-io';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private _httpService:HttpService , private _route:Router,private _socket:Socket) { }

  currentUser;

  ngOnInit() {

    let obs = this._httpService.isLogged();
    obs.subscribe(data=>{
      this.currentUser=JSON.parse(data['_body']).user;
      this._socket.emit('new_user',this.currentUser)
         this._socket.on('loggedUsers',data=>{
          console.log("Logged in users")
          for(var user of data){
          console.log(user)
        }
        })


    })
  }

  logOut(){
    let obs = this._httpService.logOut();
    obs.subscribe(data=>{
      // console.log(data)
      
      // console.log("clicked on log out")
      this._route.navigate(['home'])
    })
  }

  createGame(user){
    console.log("clicked on create game",user)
    this._route.navigate(['/game'],user)
  }

}

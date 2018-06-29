import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-leadr-board',
  templateUrl: './leadr-board.component.html',
  styleUrls: ['./leadr-board.component.css']
})
export class LeadrBoardComponent implements OnInit {

  constructor(private _httpServiec:HttpService) { }
  users=[]
  ngOnInit() {
    let obs = this._httpServiec.getAllUsers();
    obs.subscribe(data=>{
      console.log("in the leadboard comp",JSON.parse(data['_body']).data)
      this.users=JSON.parse(data['_body']).data
    })
  }

}

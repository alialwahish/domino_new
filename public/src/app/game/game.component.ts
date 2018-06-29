import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Socket } from 'ng-socket-io';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private _httpService: HttpService, private _socket: Socket, private _route: Router) {


  }

  currentUser;
  table = [];
  hand;
  opHand;
  isTurn = true;
  points = 0;
  ngOnInit() {

    let obs = this._httpService.isLogged();
    obs.subscribe(data => {
      // console.log('in game comp', JSON.parse(data['_body']).user)
      this.currentUser = JSON.parse(data['_body']).user
      // this.currentUser=JSON.parse(data['_body']).user['first_name']
      // console.log("the user in game", this.currentUser)
      this._socket.emit('new_game', this.currentUser)

    })


    this._socket.on('load_user', user => {

      // console.log("printing user name",user.first_name)
      // console.log("printing user hand", user.hand)
      this.hand = user.hand;
      this._socket.emit('userHand', this.hand);

      // console.log("the user in game after the socket update", this.hand)

      // console.log("printing currentUser hand",this.currentUser)

    })
    this._socket.on('opHand', data => {
      this.opHand = data;
      // console.log('other user hand',this.opHand)
    })
    this._socket.on('newTable', newTable => {
      if (this.table.length > 0) {
        this.isTurn = false;
      }


      this.table = newTable;



      this._socket.emit('userHand', this.hand);
      this._socket.on('opHand', data => {
        this.opHand = data;
        // console.log('other user hand',this.opHand)
      })

      var can_play = [];
      can_play.push(this.table[0]['head'])
      can_play.push(this.table[this.table.length - 1]['tail'])

      for (var h of this.hand) {

        if (h['head'] == can_play[0] || h['head'] == can_play[1]) {
          console.log('found match in hand', h['head'])
          this.isTurn = true;
          break;

        }
        if (h['tail'] == can_play[0] || h['tail'] == can_play[1]) {
          console.log('found match in hand', h['tail'])

          this.isTurn = true;
          break;
        }


      }
      console.log('cannot find bone looping ', this.isTurn)
      if (!this.isTurn) {
        this.isTurn=true;
        this.getNewBone();
      }

    })


  }

  getNewBone() {
    if (this.isTurn) {

      this._socket.emit('drawing one bone', this.hand);

      this._socket.on("empty deck", data => {
        console.log("deck is empty ")
        this.skippingTurn();
      })

      this._socket.on('receiving new hand', data => {

        console.log("new bone received")
        this.hand = data;
        if (this.canPlay()) {
          console.log('can play stay in this user ')

          return false;
        }
        // else{

        //   this.skippingTurn()
        // }
      })
    }

  }

  skippingTurn() {
    console.log("you don't have a bone to play draw one!  skipping turn")
    this.isTurn = false;

    this._socket.emit('table', this.table)
  }

  canPlay() {



    var can_play = [];
    can_play.push(this.table[0]['head'])
    can_play.push(this.table[this.table.length - 1]['tail'])
    console.log("inside can play table", can_play)
    for (var h of this.hand) {

      if (h['head'] == can_play[0] || h['head'] == can_play[1]) {
        console.log('found match in hand', h['head'])
        this.isTurn = true;
        return 

      }
      if (h['tail'] == can_play[0] || h['tail'] == can_play[1]) {
        console.log('found match in hand', h['tail'])

        this.isTurn = true;
        return 
      }


    }

    console.log('can play returns ', this.isTurn)
    return 
    // if(!this.isTurn)
    // {
    //   console.log('getting new bone again')
    //   this.getNewBone();
    // }


  }



  playBone(bone) {


    if (this.table.length == 0) { // if table is empty
      // console.log("empty table")
      this.table.push(bone);
      for (var i = 0; i < this.hand.length; i++) {

        if (this.hand[i]['head'] == bone.head && this.hand[i]['tail'] == bone.tail) {

          // console.log("index at ", i)

          this.hand.splice(i, 1);

        }
      }
      this.isTurn = false;
      this._socket.emit('table', this.table)
    }




    if (this.isTurn && this.table.length > 0) {


      var can_play = [];
      can_play.push(this.table[0]['head'])
      can_play.push(this.table[this.table.length - 1]['tail'])





      if (bone.head == can_play[1]) {


        this.table.push(bone);
      }
      else if (bone.tail == can_play[1]) {
        var temp = bone.tail;
        bone.tail = bone.head;
        bone.head = temp;

        this.table.push(bone);

      }



      else if (bone.tail == can_play[0]) {



        this.table.unshift(bone);

      }






      else if (bone.head == can_play[0]) {
        var temp = bone.tail;
        bone.tail = bone.head;
        bone.head = temp;
        this.table.unshift(bone);
      }






      for (var i = 0; i < this.hand.length; i++) {

        if (this.hand[i]['head'] == bone.head && this.hand[i]['tail'] == bone.tail) {

          // console.log("index at ", i)

          this.hand.splice(i, 1);
        }
      }

      this._socket.emit('userHand', this.hand);
      this._socket.on('opHand', data => {
        this.opHand = data;
        // console.log('other user hand',this.opHand)
      })



      if (this.hand.length == 0) {
        console.log("this player wins this many points", this.opHand)
        // for(var j=0;j<this.opHand.length;j++){
        //   this.points+=this.opHand[j]['points']
        //   console.log("this.opHand[j]['points']",this.opHand[j]['points'])
        //   console.log("hand points ",this.points)
        // }
        // console.log("total points:",this.points)
        return false;
      }



      this.isTurn = false;
      this._socket.emit('table', this.table)
    }


    else {
      console.log("check your hand")
    }





  }



}

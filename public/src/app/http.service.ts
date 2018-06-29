import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:Http) { }

  login(user){
    return this._http.post('/api/login',user)
  }

  initDominos(){

    //console.log("in service creating dominos")
    return this._http.get('/api/createDominos')
  }  
  signUp(user){
    return this._http.post('/api/signUp',user)
  }
  isLogged(){
    return this._http.get('/api/isLogged')
  }
  logOut(){
    //console.log("in service logging out")
    return this._http.get('/api/logout');
  }
  getAllUsers(){
    return this._http.get('/api/getAllUsers')
  }
}

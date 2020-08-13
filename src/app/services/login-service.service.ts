import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
// import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user: firebase.User;
  constructor(public auth : AngularFireAuth,public route:Router) { }
 
  public login(){
    let provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider)
    .then(userData => this.user = userData.user)
    .catch(err => console.log(err));
  }
  public logout(){
    this.user=null;
  }

  signup(){
    this.route.navigate[('/signup')];
  }
}

import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    private afs: AngularFirestore,   
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async signin(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log('result: ' + result);
    this.router.navigate(['/home']);
  }
}

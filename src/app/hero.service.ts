import { Injectable } from '@angular/core';
import { planets } from 'src/assets/data/data';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  getDoc,
  getFirestore,
  onSnapshot,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  userId: string | undefined;
constructor( 
  private auth: Auth,
  private firestore: Firestore) { }
  getData(){
    return planets
  }
//register  method
register(ss: any) {
  createUserWithEmailAndPassword(this.auth, ss.email, ss.password).then(
    () => {
      this.userId = this.auth.currentUser?.uid;
      const userDetails = {
        uid: this.userId,
        name: ss.fname,
        lname: ss.lname,
        email: ss.email,
       Address: ss.Add,
      };
      const docRef = collection(this.firestore, 'users');
      addDoc(docRef, userDetails)
        .then(() => {})
        .catch((err) => console.log(err.message));
      alert('User created successfully');
     
    },
    (err) => {
      alert('something went wrong');
     
    }
  );
}

login(email: string, password: string) {
  signInWithEmailAndPassword(this.auth, email, password).then(
    () => {
      localStorage.setItem('email', email);
      this.userId = this.auth.currentUser?.uid;
      console.log(this.userId);
      
     
    },
    (err) => {
      alert('Something went wrong, please try again.');
     
    }
  );
}


}

import React from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import { firebaseAuth } from '../fireBaseConfg';
function Authentication() {

    const googleSignIn = async () => {
        try {
          const authProvider = new firebase.auth.GoogleAuthProvider(); //imp
         // console.log(authProvider)
          await firebaseAuth.signInWithPopup(authProvider);  //imp
          console.log('Signed in successfully!');
        } catch (error) {
          console.error('Error signing in with Google:', error);
        }
      };
  return (
    <div>
        <input type='button' value='Sign In' onClick={googleSignIn}/>
    </div>
  )
}

export default Authentication
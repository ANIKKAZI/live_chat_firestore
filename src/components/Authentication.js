import React from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import { firebaseAuth } from '../fireBaseConfg';
function Authentication() {

    const googleLogiIn = async () => {
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
    <div className='login-container'>
        <input type='button' value='Log In'  className= 'login-button' onClick={googleLogiIn}/>
    </div>
  )
}

export default Authentication
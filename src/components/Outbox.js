import React,{useState} from 'react'
import { firebaseAuth,firebaseDb } from '../fireBaseConfg'
import firebase from "firebase/compat/app";
const Outbox = ({scroll}) => {
  let [sentMsg,setSentMsg] = useState('');
   let sendMessage  = async(e)=>{
    e.preventDefault();
    console.log(firebaseAuth.currentUser) // returns email,userid,photourl,phonenumber ec about the user.
    const{uid} = firebaseAuth.currentUser;
    await firebaseDb.collection('livechat').add(
        {
            chat:sentMsg,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp() 
        }
    )
    setSentMsg('');
    scroll.current.scrollIntoView({behavior:'smooth'})
   }
  
    return (
    <div>
        <form onSubmit={sendMessage}>
            <div className="sendMsg">
            <input type='text' value={sentMsg} onChange={(e)=>setSentMsg(e.target.value)}></input>
            <button type='submit'>Send</button>
            </div>
        </form>


    </div>
  )
}

export default Outbox
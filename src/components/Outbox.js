import React,{useState} from 'react'
import { firebaseAuth,firebaseDb } from '../fireBaseConfg'
import firebase from "firebase/compat/app";
const Outbox = React.forwardRef(({scroll},forRef) => {
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
    
   // inputFocus.current.focus();
    scroll.current.scrollIntoView({behavior:'smooth'})
   
   }
   let googleLogOut = ()=>{
    firebaseAuth.signOut();
  }
   
  
    return (
    <div>
        <form onSubmit={sendMessage}>
            <div className="sendMsg">
            <input type='button' value='Log Out' className='log-out' onClick={googleLogOut}/>    
            <button type='submit' className='send-button'>Send</button>
            <input ref={forRef} type='text' className="message-info" value={sentMsg} onChange={(e)=>setSentMsg(e.target.value)}></input>
            </div>
        </form>


    </div>
  )
})

export default Outbox
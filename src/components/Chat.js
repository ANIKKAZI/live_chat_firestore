import React, {useState,useEffect,useRef} from 'react'
import { firebaseAuth,firebaseDb } from '../fireBaseConfg'
import "firebase/compat/firestore";
import Outbox from './Outbox';
function Chat() {
  let [chat , setChatMessage] = useState([]);
  let scrollChat = useRef();
  let focusInput = useRef();
  
  useEffect(() => {
    const getData = firebaseDb.collection('livechat').orderBy('createdAt').onSnapshot((snapshot)=>{
      setChatMessage(snapshot.docs.map(doc=>doc.data()))
      focusInput.current.focus();
    });
    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      getData();
    };
  }, []);
  
  return (
    <>
     <div>
        <div className='primary-container'>
        {chat.map(({id,chat,uid}) => (
          <div>
             <div key={id}  className={`chat-message ${uid === firebaseAuth.currentUser.uid ? 'sent-msg' : 'received-msg'}`}>
             <p>{chat}</p>
             </div> 
          </div>
       
    ))}
    </div>
        <Outbox scroll={scrollChat} ref={focusInput}></Outbox>
        <div ref={scrollChat}></div>
    </div>
   
    </>

   
  )
}

export default Chat
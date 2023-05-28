import React, {useState,useEffect,useRef} from 'react'
import { firebaseAuth,firebaseDb } from '../fireBaseConfg'
import "firebase/compat/firestore";
import Outbox from './Outbox';
function Chat() {
  let [chat , setChatMessage] = useState([]);
  let scrollChat = useRef();
  //let query = firebaseDb.collection('livechat');
  //const [messages] = useCollectionData(query,{idField:'id'})
  
 // console.log(messages + "aaa")
  useEffect(() => {
    const getData = firebaseDb.collection('livechat').orderBy('createdAt').onSnapshot((snapshot)=>{
      setChatMessage(snapshot.docs.map(doc=>doc.data()))
     // console.log(snapshot.docs.map(doc=>doc.data()))
     
    });
    //query.orderBy('createdAt');
    //console.log(query)
    // const unsubscribe = query.orderBy('createdAt').onSnapshot(snapshot => {
    //   const messages = snapshot.docs.map(doc => doc.data());
    //   // Handle the fetched messages
    // });
  
    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      getData();
    };
  }, []);
  


  let googleSignOut = ()=>{
     firebaseAuth.signOut();
  }
  
  return (
    <>
     <div>
        <input type='button' value='Sign Out' onClick={googleSignOut}/>
        <div className='msgs'>
        {chat.map(({id,chat,uid}) => (
          <div>
             <div key={id}  className={`msg ${uid === firebaseAuth.currentUser.uid ? 'sent-msg' : 'received-msg'}`}>
             <p>{chat}</p>
             </div> 
          </div>
       
    ))}
    </div>
        <Outbox scroll={scrollChat}></Outbox>
        <div ref={scrollChat}></div>
    </div>
   
    </>

   
  )
}

export default Chat
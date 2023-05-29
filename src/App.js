import './App.css';
import Authentication from './components/Authentication';
import { firebaseAuth } from './fireBaseConfg';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth';
function App() {
  let [user] = useAuthState(firebaseAuth);
  return (
    <div>
    {user && <Chat></Chat>}
    {!user && <Authentication></Authentication>} 
   
    </div>
  );
}

export default App;

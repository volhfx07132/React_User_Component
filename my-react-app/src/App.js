import react from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  
  return (
     <div>
        <AddUser/>
        <UsersList/>
     </div>
  );
}

export default App;

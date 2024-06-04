import ChangeUser from './assets/components/changeUser';
import { createContext } from 'react';
import { useState } from 'react';
import UserProfile from './assets/components/userProfile';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'Begum' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>Use Context</h1>
        <UserProfile />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;

import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import Message from './message';

export default function ChangeUser() {
  const [newName, setNewName] = useState('');
  const { setUser } = useContext(UserContext);

  function handleName() {
    setUser({ name: newName });
    setNewName('');
  }
  return (
    <div>
      <h3>Change to Name</h3>
      <input
        type='text'
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button onClick={handleName}>Change Name</button>
      <Message />
    </div>
  );
}

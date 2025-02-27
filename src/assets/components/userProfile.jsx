import { useContext } from 'react';
import { UserContext } from '../../App';

export default function UserProfile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
    </div>
  );
}

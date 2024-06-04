import { useContext } from 'react';
import { UserContext } from '../../App';

export default function Message() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>İsminiz Başarıyla Değiştirildi : {user.name}</p>
    </div>
  );
}

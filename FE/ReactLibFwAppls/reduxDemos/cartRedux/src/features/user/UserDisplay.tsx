import { useSelector, useDispatch } from 'react-redux';
import { setName } from './userSlice';

export const UserDisplay = () => {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  console.log("🎨 RENDER: UserDisplay"); 

  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <h3>User: {name}</h3>
      <button onClick={() => dispatch(setName('John ' + Math.random().toFixed(2)))}>
        Change Name
      </button>
    </div>
  );
};

export default UserDisplay;
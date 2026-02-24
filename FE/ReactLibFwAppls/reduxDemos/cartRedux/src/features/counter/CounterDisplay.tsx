import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';
import type { RootState, AppDispatch } from '../../store';

export const CounterDisplay = () => {
  // This component ONLY subscribes to state.counter.value
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  console.log("🔢 RENDER: CounterDisplay");

  return (
    <div style={{ border: '1px solid green', padding: '10px', marginTop: '10px' }}>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default CounterDisplay;
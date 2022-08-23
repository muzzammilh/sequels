import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionType} from '../Redux/Contants/action-type';


const Home = () => {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div
      className='w-screen h-80 flex justify-center items-center flex-col gap-8'>
      <h1>{count}</h1>
      <div className='flex gap-2'>
        <button onClick={()=>{
          dispatch({type: ActionType.INCREMENT});
        }}>Increment</button>
        <button onClick={()=>{
          dispatch({type: ActionType.DECREMENT});
        }}>Decrement</button>
      </div>
    </div>
  );
};

export default Home;

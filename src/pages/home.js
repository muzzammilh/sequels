import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SearchButton from '../Components/Buttons/SearchButton';
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
        <SearchButton width={'400px'} onClick={()=>{
          dispatch({type: ActionType.DECREMENT});
        }}/>
      </div>
    </div>
  );
};

export default Home;

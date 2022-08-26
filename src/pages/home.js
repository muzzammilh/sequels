import React from 'react';
import Footer from '../Components/footer';
// import {useSelector, useDispatch} from 'react-redux';
// import {ActionType} from '../Redux/Contants/action-type';


const Home = () => {
  // const {count} = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <div
      className='w-screen h-80 flex justify-center items-center flex-col gap-8'>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

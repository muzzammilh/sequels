import React from 'react';

// import FeaturedCard from '../Components/Cards/FeaturedCard';
// import LeftBar from '../Components/NavBars/LeftBar';
import NavBar from '../Components/NavBars/NavBar';
import TabBar from '../Components/NavBars/TabBar';
// import logo from '../Images/logo.svg';
// import {useSelector, useDispatch} from 'react-redux';
// import NavBar from '../Components/NavBars/NavBar';
// import {ActionType} from '../Redux/Contants/action-type';

const Home = () => {
  // const {count} = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <div
      className='w-screen h-80 flex justify-center items-center flex-col gap-8'>
      {/* <NavBar logoUrl={logo} profileUrl={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}/> */}
      <NavBar/>
      <TabBar tabList={['hello', 'me', 'todo']}
        onClick={(index)=>console.log('index :>> ', index)}/>
    </div>
  );
};

export default Home;

import React from 'react';
import FeaturedCard from '../Components/Cards/FeaturedCard';

const Home = () => {
  return (
    <div
      className='w-screen h-80 flex justify-center items-center flex-col gap-8'>
      <FeaturedCard image={'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2865&q=80'}/>
    </div>
  );
};

export default Home;

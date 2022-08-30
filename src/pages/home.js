import React from 'react';
import TabBar from '../Components/NavBars/TabBar';
import VerticalCard from '../Components/Cards/VerticalCard';

const Home = () => {
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>Whats Popular</h1>
      </div>
      <div className='py-4'>
        <TabBar tabList={['Streeming', 'ON TV', 'For Rent', 'In Theaters']}/>
      </div>
      <div className=''>
        {
          [1, 2, 3, 4].map((item, index) => {
            return (
            // eslint-disable-next-line react/jsx-key
              <div>
                <VerticalCard/>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Home;

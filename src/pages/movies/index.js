import React from 'react';
import TabBar from '../../Components/NavBars/TabBar';
import VerticalCard from '../../Components/Cards/VerticalCard';

const Movies = () => {
  return (
    <>
      <div>
        <h1 className='font-bold'>Movies</h1>
      </div>
      <div>
        <TabBar tabList={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']} />
      </div>
      <div className='flex flex-wrap py-2 gap-2'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return <div key={item}>
            <VerticalCard/>
          </div>;
        })
        }
      </div>

    </>
  );
};

export default Movies;

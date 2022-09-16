import React from 'react';
import TabBar from '../../Components/NavBars/TabBar';
import VerticalCard from '../../Components/Cards/VerticalCard';
import PlainButton from '../../Components/Buttons/PlainButton';
import {colors} from '../../theme/colors';

const Movies = () => {
  return (
    <>
      <div>
        <h1 className='text-xl font-bold'>Movies</h1>
      </div>
      <div className='mt-4'>
        <TabBar tabList={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']}
          className={' text-sm md:text-base '} />
      </div>
      <div className='flex flex-wrap gap-x-2 gap-y-4 md:gap-6 pt-4
        justify-around md:justify-start'>
        {[...Array(20)].map((item, index) => {
          return <div key={item}>
            <VerticalCard />
          </div>;
        })
        }
      </div>
      <div className='my-10'>
        <PlainButton label={'Load More'}
          className={` w-full md:w-3/4 rounded-md text-lg font-bold flex 
           justify-center items-center mx-auto py-2 px-4 `}
          backgroundColor={colors.secondary} />
      </div>
    </>
  );
};

export default Movies;

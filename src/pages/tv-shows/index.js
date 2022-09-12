import React from 'react';
import VerticalCard from '../../Components/Cards/VerticalCard';
import TabBar from '../../Components/NavBars/TabBar';
import PlainButton from '../../Components/Buttons/PlainButton';
import {colors} from '../../theme/colors';
const TvShows = () => {
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>TV Shows</h1>
      </div>
      <div className='mt-2'>
        <TabBar tabList={['Popular', 'Airing Today', 'On TV', 'Top Rated']}
          className={' text-sm md:text-base '}/>
      </div>
      <div className='pt-4 w-full overflow-hidden'>
        <div className='flex flex-wrap gap-x-2 gap-y-4 md:gap-6
        justify-around md:justify-start'>
          {[...Array(20)].map((item, index) => {
            return (
              <div key={index}>
                <VerticalCard/>
              </div>
            );
          })}
        </div>
      </div>
      <div className='my-10'>
        <PlainButton label={'Load More'}
          className={` w-full md:w-3/4 rounded-md text-lg font-bold flex 
          justify-center items-center mx-auto py-2 px-4 `}
          backgroundColor={colors.secondary}/>
      </div>
    </div>
  );
};

export default TvShows;

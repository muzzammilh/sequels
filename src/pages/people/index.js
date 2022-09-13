import React from 'react';
import {colors} from '../../theme/colors';
import PlainButton from '../../Components/Buttons/PlainButton';
const People = () => {
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>Populor People</h1>
      </div>
      <div>
        <div className='flex flex-wrap gap-4 py-4 justify-evenly
        md:justify-start'>
          {[...Array(20)].map((item, index) => {
            return (
              <div key={index} className='w-40'>
                <div className='w-full h-52 rounded-md overflow-hidden'>
                  <img
                    key={index}
                    src={`https://api.lorem.space/image/face?w=150&h=220&${index}`}
                    alt='person'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='py-2'>
                  <h2 className='font-semibold'>Xaria Dotson</h2>
                  <p className='text-sm font-light overflow-ellipsis
                  whitespace-normal overflow-hidden'
                  style={{'-webkit-box-orient': 'vertical',
                    'display': '-webkit-box',
                    '-webkit-line-clamp': '1',
                    'color': colors.gray}}>
                    The Birch Devil in Ohio American Vandal Chad</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='mb-5'>
        <PlainButton label={'Load More'}
          className={` w-full md:w-3/4 rounded-md text-lg font-bold flex 
          justify-center items-center mx-auto py-2 px-4 `}
          backgroundColor={colors.secondary}/>
      </div>
    </div>
  );
};

export default People;

import React from 'react';
import TabBar from '../NavBars/TabBar';

const Media = () => {
  return (
    <div className='py-4'>
      <div>
        <h2 className='font-semibold text-2xl'>Media</h2>
      </div>
      <div className='mt-2'>
        <TabBar tabList={['Most Popular', 'Videos', 'Backdrops', 'Posters']}
          className=' text-xs md:text-sm'/>
      </div>
      <div className='w-full relative'>
        <div className='flex overflow-x-auto gap-2'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index)=>{
            // eslint-disable-next-line react/jsx-key
            return <div>
              <div className='w-72 h-62 overflow-hidden rounded-md my-4'>
                <img src='https://i.ytimg.com/vi/JSEK1NUPrGA/hqdefault.jpg'
                  className='object-cover'/>
              </div>
            </div>;
          })}
        </div>
        <div className='absolute h-full top-0 right-0 md:w-6
        bg-gradient-to-l from-white'/>
      </div>
    </div>
  );
};

export default Media;

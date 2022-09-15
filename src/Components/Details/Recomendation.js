import React from 'react';
import HorizontalCard from '../Cards/HorizontalCard';

const Recomendation = () => {
  return (
    <div className='py-4'>
      <div>
        <h2 className='font-semibold text-2xl'>Recomendation</h2>
      </div>
      <div className='relative'>
        <div className='flex gap-2 py-4 overflow-x-auto'>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index)=>{
            // eslint-disable-next-line react/jsx-key
              return <div>
                <HorizontalCard/>
              </div>;
            })
          }
        </div>
        <div className='absolute h-full top-0 right-0 md:w-6
        bg-gradient-to-l from-white'/>
      </div>
    </div>
  );
};

export default Recomendation;

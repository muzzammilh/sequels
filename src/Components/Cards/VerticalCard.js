import React from 'react';
import {Icon} from '../../Styles/icons';

const VerticalCard = ({title, date, rate, image, width, height}) => {
  return (
    <div className=' w-36' style={{width}}>
      <div className="w-full h-48 rounded-2xl overflow-hidden
      bg-purple-500 shadow-lg transition-shadow  "
      style={{height}}>
        {image&&<img src={image}
          alt={title} className="w-full h-full object-cover"/>}
      </div>
      <div>
        <div className='pt-2'>
          <h1 className='text-md font-semibold'>
            {title || 'Lorem ipsum'}
          </h1>
        </div>
        <div className='flex items-center pt-1'>
          <div>
            <Icon name={'date'}/>
          </div>
          <div className='text-xs text-gray-400 px-1'>
            <span>
              {
                date ||
              '13, Jun 2022'
              }
            </span>
          </div>
          <Icon name={'star'}/>
          <div className='text-xs text-gray-400 px-1'>
            <span>
              {
                rate ||
              '3.8'
              }
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VerticalCard;

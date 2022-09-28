/* eslint-disable max-len */
import React from 'react';
import {Icon} from '../../Styles/icons';
import {Link} from 'react-router-dom';
import moment from 'moment';

const VerticalCard = ({title, date, rate, image, width, height, to}) => {
  return (
    <Link to={to || '/'}><div className='w-40 scale-95 hover:scale-100' style={{width}}>
      <div className='w-full h-52 rounded-2xl overflow-hidden
      bg-gray-200 shadow-lg transition-shadow hover:shadow-2xl'
      style={{height}}>
        {image&&<img src={image}
          alt={title} className='w-full h-full object-cover'/>}
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
                moment(date).format('DD, MMM YYYY') ||
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
    </div></Link>
  );
};

export default VerticalCard;

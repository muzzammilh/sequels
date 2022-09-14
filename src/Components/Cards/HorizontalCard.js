/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import {Icon} from '../../Styles/icons';
import {Link} from 'react-router-dom';


const HorizontalCard = ({title, description, image, width, height, headIcon, titleColor, to}) => {
  return (
    <div className='w-72' style={{width}}>
      <div className='w-full h-40 rounded-lg overflow-hidden bg-purple-500 shadow-lg transition-shadow'
        style={{height}}>
        <Link to={to || '/'}>{image&&<img src={image}
          alt={title} className='w-full h-full object-cover'/>}</Link>
      </div>
      <div>
        <div className='flex justify-between items-center mt-4'>
          <div className='text-xl font-semibold'>
            <h1 style={{color: titleColor}}>{title || 'Lorem ipsum'}</h1>
          </div>
          <div>
            <Icon name={headIcon || 'star'}/>
          </div>
        </div>
        <div className='text-sm text-gray-400 pt-1'>
          <p>
            {description || 'lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;

/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import {Icon} from '../../Styles/icons';
import {Link} from 'react-router-dom';


const HorizontalCard = ({title, description, image, width, height, headIcon, titleColor, to, desColor, className, rate}) => {
  return (
    <Link to={to || '/'}><div className={[' w-72 rounded-md ', className]} style={{width}}>
      <div className='w-full h-40 rounded-lg overflow-hidden bg-gray-200 shadow-lg transition-shadow'
        style={{height}}>
        {image&&<img src={image}
          alt={title} className='w-full h-full object-cover'/>}
      </div>
      <div>
        <div className='flex justify-between items-center mt-4'
        style={{color: titleColor}}>
          <div className='text-xl font-semibold'>
            <h1>{title || 'Lorem ipsum'}</h1>
          </div>
          <div className='flex items-center'>
            <Icon name={headIcon || 'star'}/>
            <div className='text-sm pl-1'>
            {rate || 3.8}
            </div>
          </div>
        </div>
        <div className='text-sm text-gray-400 pt-1'>
          <p className='overflow-ellipsis
          whitespace-normal overflow-hidden'
          style={{'-webkit-box-orient': 'vertical',
            'display': '-webkit-box',
            '-webkit-line-clamp': '2'}}>
            {description || 'lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </p>
        </div>
      </div>
    </div></Link>
  );
};

export default HorizontalCard;

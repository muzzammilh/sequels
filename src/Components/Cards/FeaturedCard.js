import React from 'react';
import {Icon} from '../../Styles/icons';
import {colors} from '../../theme/colors';

const FeaturedCard = ({title, textColor, date, rate,
  description, image, width, height, backgroundColor, buttonLabel}) => {
  return (
    <div className='max-w-screen-md w-full relative rounded-xl py-1'
      style={{width, backgroundColor: backgroundColor || colors.primary}}>
      <div className='md:flex min-h-[13rem] m-4'
        style={{color: textColor || colors.white}}>
        <div className='w-full md:w-48 h-52 bg-gray-200
        rounded-2xl overflow-hidden shadow-lg transition-shadow'
        style={{height}}>
          {image&&<img src={image}
            alt={title} className='w-full h-full object-cover'/>}
        </div>
        <div className='p-4 w-full'>
          <div className={'flex justify-between items-center'}>
            <div className='text-2xl font-bold'>
              <h1>{title || 'Lorem Impsum'}</h1>
            </div>
            <div className='flex justify-center gap-1'>
              <Icon name={'star'} height={'1.5rem'}/>
              <span>{rate || 3.8}</span>
            </div>
          </div>
          <div className='opacity-70 text-sm pt-4'>
            <p>
              {description ||
                // eslint-disable-next-line max-len
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }
            </p>
          </div>
          <div className='flex items-center pt-6'>
            <div className='pr-6'>
              <button className='px-6 py-2 rounded-md text-sm font-semibold'
                style={{backgroundColor: colors.primaryLight,
                  color: colors.primary}} >
                {buttonLabel || 'Watch On Netflix'}</button>
            </div>
            <div>
              <Icon name={'date'} color={colors.white}/>
            </div>
            <div className='text-xs text-gray-400 px-2'>
              <span>
                {
                  date ||
              '13, Jun 2022'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;

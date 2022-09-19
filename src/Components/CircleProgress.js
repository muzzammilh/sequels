import React from 'react';
import {colors} from '../theme/colors';

const CircleProgress = ({radius = 35, color, percentage=50}) => {
  const circumference = 2 * Math.PI * (radius-6);
  return (
    <div >
      <div className='relative flex justify-center items-center'
        style={{width: `${radius*2}px`, height: `${radius*2}px`}}>
        <svg className="rounded-full flex justify-center
        items-center -rotate-90 absolute"
        style={{backgroundColor: colors.primary,
          width: `${radius*2}px`, height: `${radius*2}px`}}
        x-cloak aria-hidden="true">
          <circle
            strokeWidth="4"
            stroke={percentage>70? color || colors.secondary :
                color || colors.star}
            opacity="0.25"
            fill="transparent"
            r={`${radius - 6}`}
            cx={`${radius}`}
            cy={`${radius}`}
          />
          <circle
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset=
              {`${circumference - percentage/100 * circumference}`}
            strokeLinecap="round"
            stroke= {percentage>70? color || colors.secondary :
                color || colors.star}
            fill="transparent"
            r={`${radius - 6}`}
            cx={`${radius}`}
            cy={`${radius}`}
          />
        </svg>
        <div className='flex relative z-10 text-white'>
          <h3 className='text-xl font-bold'>{percentage}</h3>
          <span className='text-xs font-light pt-1'>%</span>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;

import React from 'react';
import {useSelector} from 'react-redux';

const PercentageBar = ({percentage, value, color1, color2, height, width}) => {
  const {colors} = useSelector((state) => state.theme);
  return (
    <div className='w-full h-2 rounded-full flex items-center gap-2'
      style={{height, width}}>
      <div className='h-full rounded-full'
        style={{width: `${percentage}%`,
          background: `linear-gradient(90deg,
          ${color1 || colors.seagreenSecondary} 0%,
          ${color2 || colors.seagreenPrimay} 100%)`}}/>
      <div className='text-xs' style={{color: colors.primary}}>
        {value}
      </div>
    </div>
  );
};

export default PercentageBar;

import React from 'react';
import {colors} from '../../theme/colors';

const OutlinedButton = ({color, onClick, label, disabled,
  backgroundColor, borderRadius, borderColor, className, fontSize,
  fontStyle, fontWeight, height, width}) => {
  return (
    <div>
      <button
        className={['btn btn-primary rounded-full px-6 h-10 border ',
          className]}
        style={{backgroundColor,
          borderColor: borderColor || colors.primary,
          borderRadius,
          height,
          width}}
        disabled={disabled} onClick={onClick}>
        <div className='font-semibold text-sm'
          style={{color: color || colors.primary,
            fontSize,
            fontStyle,
            fontWeight}}>{label}</div></button>
    </div>
  );
};

export default OutlinedButton;

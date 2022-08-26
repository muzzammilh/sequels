import React from 'react';
import {colors} from '../../theme/colors';

const IconButton = ({color, onClick, icon, disabled,
  backgroundColor, borderRadius, borderColor,
  className, fontSize, fontStyle, fontWeight, height, width}) => {
  return (
    <div>
      <button>
        <div
          // eslint-disable-next-line max-len
          className={[' h-10 w-10 rounded-full text-white flex justify-center items-center ',
            className]}
          style={{backgroundColor: backgroundColor.primary,
            borderRadius, height, width}}
          disabled={disabled} onClick={onClick}>
          <div style={{color: color || colors.primary,
            fontSize, fontStyle, fontWeight}}>
            {icon}
          </div></div>
      </button>
    </div>
  );
};

export default IconButton;

import React from 'react';
import {useSelector} from 'react-redux';

const IconButton = ({color, onClick, icon, disabled,
  backgroundColor, borderRadius, borderColor, label,
  className, fontSize, fontStyle, fontWeight, height, width}) => {
  const {colors} = useSelector((state) => state.theme);
  return (
    <div>
      <button>
        <div
          // eslint-disable-next-line max-len
          className={[' h-10 w-10 rounded-full text-white flex justify-center items-center ',
            className]}
          style={{backgroundColor: backgroundColor,
            borderRadius, height, width, borderColor: borderColor}}
          disabled={disabled} onClick={onClick}>
          <div style={{color: color || colors.primary,
            fontSize, fontStyle, fontWeight}}>
            {icon}
          </div>
          <div className={label&&'pl-2'} style={{color: color || colors.primary,
            fontSize, fontStyle, fontWeight}}>
            {label}
          </div>
        </div>
      </button>
    </div>
  );
};

export default IconButton;

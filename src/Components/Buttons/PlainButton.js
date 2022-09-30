import React from 'react';
import {useSelector} from 'react-redux';

const PlainButton = ({color, onClick, label, disabled,
  backgroundColor, borderRadius, className, fontSize,
  fontStyle, fontWeight, height, width}) => {
  const {colors} = useSelector((state) => state.theme);
  return (
    <div>
      <button
        className={['btn btn-primary rounded-full px-6 h-10 ',
          className]}
        style={{backgroundColor: backgroundColor || colors.primary,
          borderRadius,
          height,
          width}}
        disabled={disabled} onClick={onClick}>
        <div
          style={{color: color || colors.primaryLight,
            fontSize,
            fontStyle,
            fontWeight}}>{label}</div></button>
    </div>
  );
};

export default PlainButton;

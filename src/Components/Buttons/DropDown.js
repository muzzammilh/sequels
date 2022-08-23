
import React, {useRef, useState, useEffect} from 'react';
import {colors} from '../../theme/colors';

const DropDown = ({color, label, disabled, backgroundColor, borderRadius,
  borderColor, className, fontSize, fontStyle, fontWeight, height, width,
  dropDownList, children, dropDownListWidth}) => {
  const [showDropDown, setDropDown] = useState(false);
  const ref = useRef();
  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        showDropDown&&setDropDown(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [showDropDown]);
  return (
    <div ref={ref} className="relative inline-block text-left" >
      <div>
        <button
          className={['dropdown btn btn-primary rounded-full px-6 h-10 border ',
            className]}
          style={{backgroundColor, borderColor: borderColor || colors.primary,
            borderRadius, height, width}}
          disabled={disabled} onClick={()=>{
            setDropDown(true);
          }}>
          <div
            style={{color: color || colors.primary,
              fontSize,
              fontStyle,
              fontWeight}}
          >
            {label}</div></button>

      </div>

      {showDropDown && <div
      // eslint-disable-next-line max-len
        className= 'dropdown-menu origin-top-right absolute right-0 mt-2 min-w-36 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none '
        style={{width: dropDownListWidth}}
        role="menu" ariaOrientation="vertical"
        ariaLabelledby="menu-button"
        tabIndex="-1">
        <div className="py-1" role="none">
          {children}

        </div>
      </div>}
    </div>
  );
};

export default DropDown;

import React from 'react';
import {colors} from '../../theme/colors';

const SearchButton = ({onChange, iconHeight, height, width}) => {
  return (
    <div className='flex rounded-full justify-center items-center px-4'
      style={{backgroundColor: colors.gray, width, height}}>
      <div>
        <svg height={iconHeight || '20'} viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.5" cy="11.5" r="11.5" fill={colors.primary}/>
          <line x1="13.1196" y1="14.0848" x2="23.0848" y2="24.8804"
            stroke={colors.primary} strokeWidth="3" strokeLinecap="round"/>
        </svg>

      </div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search"
        // eslint-disable-next-line max-len
        className= ' bg-transparent appearance-none w-full h-10  px-4 leading-tight focus:outline-none focus:bg-transparent '
        style={{color: colors.primary}}
      />
    </div>
  );
};

export default SearchButton;

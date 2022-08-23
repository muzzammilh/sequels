import React from 'react';
import {colors} from '../../theme/colors';
import IconButton from './IconButton';

const SearchButton = () => {
  return (
    <div className='flex  justify-center items-center' >
      <div className='flex rounded-full justify-center items-center px-4'
        style={{backgroundColor: colors.gray}}>
        <div>
          <svg width="20" height="23" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5" cy="11.5" r="11.5" fill="#0E222B"/>
            <line x1="13.1196" y1="14.0848" x2="23.0848" y2="24.8804"
              stroke="#0E222B" strokeWidth="3" strokeLinecap="round"/>
          </svg>

        </div>
        <input
          type="text"
          placeholder="Search"
          // eslint-disable-next-line max-len
          className= ' bg-transparent appearance-none w-full h-10  px-4 leading-tight focus:outline-none focus:bg-transparent '
          style={{color: colors.primary}}
        />
      </div>
      <div className='flex justify-center items-center pl-8'>
        <IconButton/>
      </div>
    </div>
  );
};

export default SearchButton;

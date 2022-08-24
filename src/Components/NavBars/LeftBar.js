import React from 'react';
import {Link} from 'react-router-dom';
import NavIcons from '../../Styles/NavIcons';

const LeftBar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen w-1/5 bg-gray-200'>
      <div>
        <ul className='font-semibold'>
          <li>
            <Link className='flex items-center my-6' to="/">
              <span className='px-2 mr-2 bg-green-400 w-2/5 h-10 flex
              justify-end items-center rounded-r-full'>
                <NavIcons name={'home'}/></span>
                Home</Link>
          </li>
          <li>
            <Link className='flex items-center my-6 ' to="/">
              <span className='px-2 w-3/12 justify-end flex'>
                <NavIcons name={'home'}/></span>
                Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;

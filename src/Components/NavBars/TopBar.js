/* eslint-disable indent */
import React, {useState} from 'react';
import NavIcons from '../../Styles/NavIcons';
import {colors} from '../../theme/colors';
const TopBar = ({searchBgColor, onClickFilter, onClickLogo, onChangeSearch,
  logoUrl, profileUrl, children}) => {
   const [onPClick, setPClick] = useState(0);
  return (
    <div className=' flex flex-col w-full px-4 justify-center items-center'>
        <div className='w-full py-4 flex justify-between items-center'>

          {/* ------------ Logo ------------ */}

          <div className='flex justify-center items-center'>
          {children}
            <div>
            {logoUrl&&<a onClick={onClickLogo}>
              <img className='h-6' src={logoUrl}/></a>}
            </div>
          </div>

          {/* ------------------------ */}

          {/* ------------ Search Bar Desktop ------------ */}

          <div className='hidden gap-4 h-9 max-w-lg w-full mx-4 md:flex'>
            <div className='rounded-full w-full flex
              justify-center items-center px-3'
            style={{backgroundColor: searchBgColor || colors.primaryLight}}>
              <NavIcons name={'search'}/>
              <div className='w-full'>
                <input className='bg-transparent focus:border-transparent
            hover:border-transparent focus-within:border-transparent
            outline-none w-full px-2 placeholder-blue-900
            placeholder-opacity-50'
                placeholder='Search for Moviens / Tv Show'
                onChange={onChangeSearch}/>
              </div>
            </div>
            <div>
              <button className='rounded-full w-9 h-9
               flex justify-center items-center'
              style={{backgroundColor: colors.primary}}
              onClick={onClickFilter}>
                <div className=' rotate-90 transform'>
                  <NavIcons name={'filter'} color={colors.primaryLight}
                    height={'1rem'}/>
                </div>
              </button>
            </div>
          </div>

          {/* ----------------------- */}

          <div className='flex gap-4 md:gap-8'>
            <div>

                {/* ------------ Notifications Button ------------ */}

                <button className='rounded-full w-9 h-9 border
                flex justify-center items-center relative'
                style={{borderColor: colors.primary}}
                onClick={()=>{
                    onPClick != 1 ? setPClick(1) : setPClick(0);
                }}>
                    <div
                    className='absolute w-2 h-2 rounded-full
                    bg-red-700 transform rotate-12 -translate-y-3
                    translate-x-3 origin-bottom'/>
                <NavIcons name={'notification'}/>
                </button>

                {/* ----------------------- */}

                {/* ------------ DropDown Of Notification ----------- */}

                {onPClick==1&&<div
                className="origin-top-right absolute right-0 mt-2
                max-w-sm w-full  rounded-lg shadow-md
                bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical"
                aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1 px-4 max-h-72 overflow-y-auto"
                    role="none">
                        {[1, 2, 3, 4, 5].map((item, index)=>{
                            // eslint-disable-next-line react/jsx-key
                            return <div
                            className="text-gray-700 block py-2 text-sm
                            border-b border-opacity-50">
                                <div className='flex items-center
                                justify-between'>
                                  <h5 className='font-bold text-md'>
                                    User Name</h5>
                                  <span className='text-xs text-gray-500'>
                                    6:30pm</span>
                                </div>
                                <p className='overflow-hidden overflow-ellipsis
                                whitespace-normal'
                                style={{'-webkit-box-orient': 'vertical',
                                'display': '-webkit-box',
                                '-webkit-line-clamp': '2'}}>
                                {`Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled 
                                it to make a type specimen book.`}</p>
                            </div>;
                        })}
                    </div>
                    <div
                    className='flex justify-center w-full py-2 text-blue-600'>
                        <a className='text-xs'>
                            Clcik Here to Show More</a>
                    </div>
                </div>}

                {/* ----------------------- */}

            </div>
            <div>

                {/* ------------ Profile Button ------------ */}

                <button className='rounded-full w-9 h-9
                flex justify-center items-center overflow-hidden'
                style={{backgroundColor: colors.primaryLight}}
                onClick={()=>{
                    onPClick != 2 ? setPClick(2) : setPClick(0);
                }}>
                {profileUrl?<img className='h-full w-full object-cover'
                    src={profileUrl}/>:
                    <NavIcons name={'user'} color={colors.primary}/>}
                </button>

                {/* ----------------------- */}

                {/* ------------ DropDown Of Profile ----------- */}

                {onPClick==2&&<div
                className="origin-top-right absolute right-0 mt-2
                w-56 rounded-lg shadow-md bg-white ring-1
                ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical"
                aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1 px-4" role="none">
                    <div
                    className="text-gray-700 block py-2 text-sm
                    border-b border-opacity-50">
                        <h5>Signed in as:</h5>
                        <span className='font-semibold '>
                            text@text.com</span>
                    </div>
                    <a href="#"
                    className="text-gray-700 block py-2 text-sm">
                        Account settings</a>
                    <a href="#"
                    className="text-gray-700 block py-2 text-sm">
                        Support</a>
                    <form method="POST" action="#" role="none">
                        <button type="submit"
                        className="text-gray-700 block w-full
                        text-left py-2 text-sm "
                        role="menuitem" tabIndex="-1"
                        id="menu-item-3">
                            <div
                            className='border rounded-full h-10 flex
                            justify-center items-center'>
                                Sign out
                            </div>
                        </button>
                    </form>
                    </div>
                </div>}

                {/* ----------------------- */}

            </div>
          </div>
        </div>

        {/* ------------ Search Bar Mobile ------------ */}

        <div className='flex gap-4 h-9 w-full mx-4 md:hidden mt-2'>
          <div className='rounded-full w-full flex
            justify-center items-center px-3'
          style={{backgroundColor: searchBgColor || colors.primaryLight}}>
            <NavIcons name={'search'}/>
            <div className='w-full'>
              <input className='bg-transparent focus:border-transparent
            hover:border-transparent focus-within:border-transparent
            outline-none w-full px-2 placeholder-blue-900
            placeholder-opacity-50'
              placeholder='Search for Moviens / Tv Show'
              onChange={onChangeSearch}/>
            </div>
          </div>
          <div>
            <button className='rounded-full w-9 h-9
             flex justify-center items-center'
            style={{backgroundColor: colors.primary}}>
              <div className=' rotate-90 transform'>
                <NavIcons name={'filter'} color={colors.primaryLight}
                  height={'1rem'}/>
              </div>
            </button>
          </div>
        </div>

        {/* ------------------------ */}

      </div>
  );
};

export default TopBar;

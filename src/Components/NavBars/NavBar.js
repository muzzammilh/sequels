import React, {useEffect, useState} from 'react';
import TopBar from './TopBar';
import logo from '../../Images/logo.svg';
import {colors} from '../../theme/colors';
import LeftBarMobile from './LefBarMobile';

const NavBar = () => {
  const [shadow, setshadow] = useState();
  const myFunction = () => {
    if (window.scrollY>0) {
      shadow!=true && setshadow(true);
    } else {
      shadow!=false && setshadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', myFunction);
    return () => window.removeEventListener('scroll', myFunction);
  }, []);
  return (
    <div className='justify-self-center top-0 right-0 left-0 z-40 fixed'>
      <TopBar
        logoUrl={logo}
        profileUrl={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}
        backgroundColor= {colors.white}
        className={shadow ? ' md:shadow-md ' : ' '}
      >
        <LeftBarMobile/>
      </TopBar>
    </div>
  );
};

export default NavBar;

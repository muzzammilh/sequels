import React, {useEffect, useState} from 'react';
import TopBar from './TopBar';
import logo from '../../Images/logo.svg';
import LeftBar from './LeftBar';
import {colors} from '../../theme/colors';

const NavBar = ({changePostion}) => {
  const [shadow, setshadow] = useState();
  const myFunction = () => {
    console.log('window :>> ', window.scrollY);
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
    <div>
      <div className='justify-self-center top-0 right-0 left-0 z-40'
        style={{position: changePostion? 'absolute' : 'fixed'}}>
        <TopBar
          logoUrl={logo}
          profileUrl={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}
          backgroundColor= {colors.white}
          className={shadow ? ' md:shadow-md ' : ' '}
        >
          <LeftBar/>
        </TopBar>
      </div>
    </div>
  );
};

export default NavBar;

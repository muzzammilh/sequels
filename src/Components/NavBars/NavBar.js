import React from 'react';
import TopBar from './TopBar';
import logo from '../../Images/logo.svg';
import LeftBar from './LeftBar';

const NavBar = () => {
  return (
    <div>
      <div className='fixed container justify-self-center
      top-0 right-0 left-0 z-40 mx-auto'>

        <TopBar
          logoUrl={logo}
          profileUrl={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}
        >
          <LeftBar/>
        </TopBar>
      </div>
    </div>
  );
};

export default NavBar;

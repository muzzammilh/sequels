import React, {useEffect, useState} from 'react';
import TopBar from './TopBar';
import logo from '../../Images/logo.svg';
import {colors} from '../../theme/colors';
import LeftBarMobile from './LefBarMobile';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import ForgetPassword from '../../pages/ForgetPassword';

const NavBar = () => {
  const [shadow, setshadow] = useState();
  const [joinUs, setJoinUs] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [currentJoinUs, setCurrentJoinUs] = useState(0);
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
  const getJoinUs = (value) => {
    switch (value) {
      case 0:
        return <Login joinUs={joinUs} joinUsClick={()=>setJoinUs(false)}
        loginInClick={()=>{
        setJoinUs(false);
        setLoginSuccess(true);
        }}
        forgetClick = {()=>setCurrentJoinUs(2)}
        signUpClick={()=>setCurrentJoinUs(1)}/>;
      case 1:
        return <SignUp joinUs={joinUs} joinUsClick={()=>setJoinUs(false)}
        signUpInClick={()=>{
        setJoinUs(false);
        setLoginSuccess(true);
        }}
        loginClick={()=>setCurrentJoinUs(0)}/>;
     case 2:
      return <ForgetPassword joinUs={joinUs}
      joinUsClick={()=>setJoinUs(false)}
      onBackClick={()=>setCurrentJoinUs(0)}/>;
      default:
        break;
    }
  };
  return (
    <>
      <div className='justify-self-center top-0 right-0 left-0 z-40 fixed'>
        <TopBar
          logoUrl={logo}
          profileUrl={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}
          backgroundColor= {colors.white}
          className={shadow ? ' md:shadow-md ' : ' '}
          loginSuccess={loginSuccess}
          joinUsClick={()=>{
            currentJoinUs != 0 && setCurrentJoinUs(0);
            setJoinUs(true);
          }}
          signOutClick={()=>setLoginSuccess(false)}
        >
          <LeftBarMobile/>
        </TopBar>
      </div>
      {getJoinUs(currentJoinUs)}
    </>
  );
};

export default NavBar;

import React, {useEffect, useRef} from 'react';
import {colors} from '../theme/colors';
import Logo from '../Images/logo-2.svg';
import {Link} from 'react-router-dom';
import {strings} from '../Styles/Strings';
const Footer = ({inViewPort}) => {
  const myRef = useRef();
  const myFunction = () => {
    if (myRef.current?.getBoundingClientRect().top -
    window?.innerHeight<=0) {
      inViewPort(true);
    } else {
      inViewPort(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', myFunction);
    return () => window.removeEventListener('scroll', myFunction);
  }, []);
  return (
    <div ref={myRef} className='w-full flex justify-center items-center
    float-bottom px-8 py-20 relative z-50'
    style={{backgroundColor: colors.primary, minHeight: '50vh'}}>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-12'>
        <div className='flex flex-col justify-between gap-4
        items-end col-span-2 md:col-span-1' style={{minHeight: '18vh'}}>
          <img src={Logo} className='h-20'/>
          <button className='uppercase font-bold px-4 py-2 rounded'
            style={{backgroundColor: colors.white, color: colors.secondary}}>
              Join The Community</button>
        </div>
        <div>
          <span className='text-lg font-bold uppercase text-white'>
              The Basics</span>
          <ul className='text-white my-1 font-light'>
            <li>
              <Link to='/'>{strings.footerButton1}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton2}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton3}s</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton4}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton5}</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className='text-lg font-bold uppercase text-white'>
          GET INVOLVED</span>
          <ul className='text-white my-1 font-light'>
            <li>
              <Link to='/'>{strings.footerButton10}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton11}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton12}</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className='text-lg font-bold uppercase text-white'>
          COMMUNITY</span>
          <ul className='text-white my-1 font-light'>
            <li>
              <Link to='/'>{strings.footerButton6}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton7}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton8}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton9}</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className='text-lg font-bold uppercase text-white'>
              The Basics</span>
          <ul className='text-white my-1 font-light'>
            <li>
              <Link to='/'>{strings.footerButton13}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton14}</Link>
            </li>
            <li>
              <Link to='/'>{strings.footerButton15}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

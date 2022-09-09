import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavIcons from '../../Styles/NavIcons';
import {strings} from '../../Styles/Strings';
import {colors} from '../../theme/colors';

const LeftBar = () => {
  const [onclick, setonclick] = useState(0);
  const [close, setclose] = useState(false);
  return (
    <>
      {/* ------------ Desktop Left NavBar ------------ */}

      <div className='hidden absolute left-0 top-0 h-screen
       w-1/6 items-center md:flex z-40'>
        <div className='w-full'>
          <ul className='font-semibold text-sm'>
            <li>
              <Link className='flex items-center my-8' to={strings.navLink1}
                onClick={()=>{
                  onclick!=0 && setonclick(0);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==0 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==0 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'home'}
                    color={onclick==0 ? colors.white : colors.primary}/></span>
                {strings.navButton1}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink2}
                onClick={()=>{
                  onclick!=1 && setonclick(1);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==1 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==1 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'movie'}
                    color={onclick==1 ? colors.white : colors.primary}/></span>
                {strings.navButton2}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink5}
                onClick={()=>{
                  onclick!=2 && setonclick(2);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==2 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==2 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'tv-show'}
                    color={onclick==2 ? colors.white : colors.primary}/></span>
                {strings.navButton3}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink8}
                onClick={()=>{
                  onclick!=3 && setonclick(3);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==3 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==3 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'people'}
                    color={onclick==3 ? colors.white : colors.primary}/></span>
                {strings.navButton9}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink10}
                onClick={()=>{
                  onclick!=4 && setonclick(4);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==4 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==4 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'more'}
                    color={onclick==4 ? colors.white : colors.primary}/></span>
                {strings.navButton4}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink3}
                onClick={()=>{
                  onclick!=5 && setonclick(5);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==5 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==5 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'add-movie'}
                    color={onclick==5 ? colors.white : colors.primary}/></span>
                {strings.navButton5}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink6}
                onClick={()=>{
                  onclick!=6 && setonclick(6);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==6 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==6 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'add-tv-show'}
                    color={onclick==6 ? colors.white : colors.primary}/></span>
                {strings.navButton6}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink11}
                onClick={()=>{
                  onclick!=7 && setonclick(7);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==7 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==7 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'setting'}
                    color={onclick==7 ? colors.white : colors.primary}/></span>
                {strings.navButton7}</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ------------------------ */}

      {/* ------------ Mobile Left NavBar ------------ */}

      <button onClick={() => setclose(true)} className='md:hidden mr-2'>
        <NavIcons height={'1.5rem'} name={'menu'} color={colors.primary}/>
      </button>

      <div className={[` md:hidden fixed left-0 top-0 h-screen
       w-3/5 sm:w-2/5 justify-center z-50 flex-col 
       shadow-lg `,
       close ? ' flex ' : ' hidden ']}
      style={{backgroundColor: colors.white}}>
        <div className='absolute top-5 right-5'>
          <button className='rounded-full w-6 h-6
          border flex justify-center items-center'
          style={{borderColor: colors.primary}}
          onClick={() => setclose(false)}>
            <NavIcons name={'close'}
              color={colors.primary}
              height={'.8rem'}/>
          </button>
        </div>
        <div className='w-full'>
          <ul className='font-semibold text-sm'
            style={{color: colors.primary}}>
            <li>
              <Link className='flex items-center my-8' to={strings.navLink1}
                onClick={()=>{
                  onclick!=0 && setonclick(0);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==0 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==0 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'home'}
                    color={onclick==0 ? colors.white : colors.primary}/></span>
                {strings.navButton1}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink2}
                onClick={()=>{
                  onclick!=1 && setonclick(1);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==1 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==1 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'movie'}
                    color={onclick==1 ? colors.white : colors.primary}/></span>
                {strings.navButton2}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink5}
                onClick={()=>{
                  onclick!=2 && setonclick(2);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==2 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==2 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'tv-show'}
                    color={onclick==2 ? colors.white : colors.primary}/></span>
                {strings.navButton3}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink8}
                onClick={()=>{
                  onclick!=3 && setonclick(3);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==3 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==3 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'people'}
                    color={onclick==3 ? colors.white : colors.primary}/></span>
                {strings.navButton9}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink10}
                onClick={()=>{
                  onclick!=4 && setonclick(4);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==4 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==4 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'more'}
                    color={onclick==4 ? colors.white : colors.primary}/></span>
                {strings.navButton4}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink3}
                onClick={()=>{
                  onclick!=5 && setonclick(5);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==5 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==5 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'add-movie'}
                    color={onclick==5 ? colors.white : colors.primary}/></span>
                {strings.navButton5}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink6}
                onClick={()=>{
                  onclick!=6 && setonclick(6);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==6 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==6 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'add-tv-show'}
                    color={onclick==6 ? colors.white : colors.primary}/></span>
                {strings.navButton6}</Link>
            </li>
            <li>
              <Link className='flex items-center my-8 ' to={strings.navLink11}
                onClick={()=>{
                  onclick!=7 && setonclick(7);
                  setclose(false);
                }}>
                <span
                  className={[' px-2  h-10  flex justify-end items-center ',
              onclick==7 ? ' w-4/12 rounded-r-full mr-2 ':
              ' w-3/12 ']}
                  style={onclick==7 ? {background: `linear-gradient(90deg, 
                ${colors.secondaryLight} 0%, ${colors.secondary} 100%)`} : {}}
                >
                  <NavIcons name={'setting'}
                    color={onclick==7 ? colors.white : colors.primary}/></span>
                {strings.navButton7}</Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default LeftBar;

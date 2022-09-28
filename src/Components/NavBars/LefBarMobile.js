import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavIcons from '../../Styles/NavIcons';
import {strings} from '../../Styles/Strings';
import {colors} from '../../theme/colors';

const LeftBarMobile = () => {
  const [onclick, setonclick] = useState(0);
  const [close, setclose] = useState(false);

  useEffect(() => {
    setonclick(strings.leftBar.
        findIndex((item) => item.to === window.location.pathname));
  }, []);
  return (
    <>
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
            {strings.leftBar.map((item, index) => {
              return <li key={index}>
                <Link className='flex items-center my-8'
                  to={item.to}
                  onClick={()=>{
                    onclick!=index && setonclick(index);
                    close && setclose(false);
                  }}>
                  <span
                    className={[' px-2  h-10  flex justify-end items-center ',
                    onclick==index ? ' w-4/12 rounded-r-full mr-2 ':
                    ' w-3/12 ']}
                    style={onclick==index ?
                      {background:
                        `linear-gradient(90deg,
                        ${colors.secondaryLight} 0%,
                        ${colors.secondary} 100%)`} : {}}>
                    <NavIcons name={item.icon}
                      color={onclick==index ? colors.white : colors.primary}/>
                  </span>
                  {item.name}</Link>
              </li>;
            })}
          </ul>
        </div>
      </div>

    </>
  );
};

export default LeftBarMobile;

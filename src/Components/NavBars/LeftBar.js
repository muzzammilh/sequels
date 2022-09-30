import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavIcons from '../../Styles/NavIcons';
import {strings} from '../../Styles/Strings';
import {useSelector} from 'react-redux';

const LeftBar = () => {
  const {colors} = useSelector((state) => state.theme);
  const [onclick, setonclick] = useState(0);

  useEffect(() => {
    setonclick(strings.leftBar.
        findIndex((item) => item.to === window.location.pathname));
  }, []);
  return (
    <div className='hidden sticky left-0 top-0 h-screen
       w-1/6 items-center md:flex z-40'>
        <div className='w-full'>
          <ul className='font-semibold text-sm'>
            {strings.leftBar.map((item, index) => {
              return <li key={index}>
                <Link className='flex items-center my-8'
                  to={item.to}
                  onClick={()=>{
                    onclick!=index && setonclick(index);
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
  );
};

export default LeftBar;

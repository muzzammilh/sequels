/* eslint-disable react/jsx-key */
import React, {useState} from 'react';
import TabBar from '../Components/NavBars/TabBar';
import VerticalCard from '../Components/Cards/VerticalCard';
import FeaturedCard from '../Components/Cards/FeaturedCard';
import Spacer from '../Components/Basic/Spacer';
import {colors} from '../theme/colors';
import moment from 'moment';

const Home = () => {
  const [activeDate, setActiveDate] = useState(0);
  const [date, setDate] = useState(Date.now());
  return (
    <div>
      <div className='w-full md:w-4/6'>
        {/* ------------ Top Section ---------- */}
        <div>
          <div>
            <h1 className='text-xl font-bold'>Whats Popular</h1>
          </div>
          <div className='py-4'>
            <TabBar
              tabList={['Streaming', 'ON Rent', 'For Rent', 'In Theaters']}
              className=' text-xs md:text-sm '/>
          </div>
          <div className='relative'>
            <div className='flex overflow-x-auto touch-pan-x hide-scrollbar'>
              {[1, 2, 3, 4, 5].map((item, index) => {
                return <div className='pr-6' key={index}>
                  <VerticalCard/>
                </div>;
              })}
            </div>
            <div className='h-full absolute md:w-5 right-0 top-0
           bg-gradient-to-l from-white/40'/>
          </div>
        </div>
        {/* ---------------------- */}
        <Spacer height='2.5rem'/>
        <div>
          <div className='w-full flex items-center justify-between pb-8'>
            <h1 className='text-xl font-bold'>Movies By Date</h1>
            <input className='min-w-min w-auto text-center
              border rounded-full py-3 px-4 text-sm font-semibold
              focus:outline-none focus:shadow-outline'
            type={'date'}
            value={moment(date).format('YYYY-MM-DD')}
            onChange={(e) => setDate(e.target.value)}
            style={{borderColor: colors.primary}}/>
          </div>
          <div className='flex justify-between font-bold text-sm pb-4
          overflow-x-auto hide-scrollbar'>
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Mo', 'Tu']
                .map((item, index) => {
                  return <button
                    className={[' flex flex-col items-center px-4 py-4 ',
                  activeDate==index ? ' rounded-full ' : '']}
                    style={activeDate==index ?
                  {backgroundColor: colors.primary} : {}}
                    onClick={()=>setActiveDate(index)}>
                    <div style={{color: activeDate==index ?
                       colors.primaryLight : colors.grayDark}}>{item}</div>
                    {activeDate==index ?
                    <div className='rounded-full w-1 h-2.5'
                      style={{backgroundColor: colors.secondary}}/> :
                    <Spacer height='0.6rem'/>}
                    <span style={{color: activeDate==index ?
                      colors.primaryLight : colors.primary}}>
                      {moment(date).date()+index % moment(date).daysInMonth()}
                    </span>
                  </button>;
                })}
          </div>
          <div className='py-4'>
            <FeaturedCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

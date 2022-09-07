/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from 'react';
import TabBar from '../Components/NavBars/TabBar';
import VerticalCard from '../Components/Cards/VerticalCard';
import HorizontalCard from '../Components/Cards/HorizontalCard';
import FeaturedCard from '../Components/Cards/FeaturedCard';
import Spacer from '../Components/Basic/Spacer';
import {colors} from '../theme/colors';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {getallmovies} from '../Redux/Actions/movies';
import soundWaves from '../Images/sound-waves.svg';
import PercentageBar from '../Components/Basic/PercentageBar';
import {strings} from '../Styles/Strings';
const Home = () => {
  const [activeDate, setActiveDate] = useState(0);
  const [date, setDate] = useState(Date.now());
  const {allmovies} = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallmovies());
  }, []);
  return (
    <div className='inline md:flex'>

      {/* ------------ Left Section ---------- */}

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
              {allmovies?.map((item, index) => {
                return <div className='pr-6' key={index}>
                  <VerticalCard to={strings.navLink4 + '?id=' + item.id}
                    title={item.name} image={item.image}
                    date={item.date}/>
                </div>;
              })}
            </div>
            <div className='h-full absolute md:w-5 right-0 top-0
           bg-gradient-to-l from-white'/>
          </div>
        </div>

        {/* ---------------------- */}

        <Spacer height='2.5rem'/>

        {/* ------------ Middle Section ---------- */}

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
                      {(moment(date).date()+index) %
                      moment(date).daysInMonth()+1}
                    </span>
                  </button>;
                })}
          </div>
          <div className='py-4'>
            <div className='relative'>
              <div className='flex overflow-x-auto touch-pan-x hide-scrollbar'>
                {allmovies?.map((item, index) => {
                  return <div className='pr-6' key={index}>
                    <VerticalCard to={strings.navLink4 + '?id=' + item.id}
                      title={item.name} image={item.image}
                      date={item.date}/>
                  </div>;
                })}
              </div>
              <div className='h-full absolute md:w-5 right-0 top-0
           bg-gradient-to-l from-white'/>
            </div>
          </div>
        </div>

        {/* ---------------------- */}

        <Spacer height='1.5rem'/>

        {/* ----------- Movie Of the Day Section ----------- */}

        <div>
          <div>
            <h1 className='text-xl font-bold'>Movie of the Day</h1>
          </div>
          <div className='py-4'>
            <FeaturedCard/>
          </div>
        </div>

        {/* ---------------------- */}

        {/* ------------ Trending Section ---------- */}

        <div className='mt-8'>
          <div>
            <h1 className='text-xl font-bold'>Trendings</h1>
          </div>
          <div className='relative py-4'>
            <div className='flex overflow-x-auto touch-pan-x hide-scrollbar
            relative z-10'>
              {allmovies?.map((item, index) => {
                return <div className='pr-6' key={index}>
                  <VerticalCard to={strings.navLink4 + '?id=' + item.id}
                    title={item.name} image={item.image}
                    date={item.date}/>
                </div>;
              })}
            </div>
            <div className='h-full absolute md:w-5 right-0 top-0
           bg-gradient-to-l from-white z-10'/>
            <div className='absolute w-full h-full left-0 -bottom-20'>
              <img className='cover'
                src={soundWaves}/>
            </div>
          </div>
        </div>

        {/* ---------------------- */}

        <Spacer height='1.5rem'/>

        {/* ----------- Latest Trailer Section ----------- */}

        <div className='mt-8 py-4 pl-4 relative rounded-md'
          style={{backgroundColor: colors.primary}}>
          <div>
            <h1 className='text-xl font-bold text-white'>Latest Trailers</h1>
          </div>
          <div className='relative py-4'>
            <div className='flex overflow-x-auto touch-pan-x hide-scrollbar
            relative z-10'>
              {allmovies?.map((item, index) => {
                return <div className='pr-6' key={index}>
                  <HorizontalCard to={strings.navLink4 + '?id=' + item.id}
                    title={item.name} image={item.image}
                    date={item.date} titleColor={colors.white}/>
                </div>;
              })}
            </div>
            <div className='absolute w-full h-full left-0 top-0'
              style={{backgroundColor: colors.primary}}>
              <img className='cover'/>
            </div>
          </div>
          <div className='h-full absolute md:w-5 right-0 top-0
           bg-gradient-to-l from-white z-10'/>
        </div>

        {/* ---------------------- */}

        <Spacer height='5.5rem'/>

      </div>

      {/* ---------------------- */}

      {/* ------------ Right Section ---------- */}

      <div className='w-full md:w-2/6 md:px-10 mt-4 md:mt-0'>

        {/* ------------ Top Section ---------- */}

        <div>
          <div>
            <h1 className='text-xl font-bold'>Favorite Movies</h1>
          </div>
          <div className='py-4 relative z-10'>
            <div className='z-10 relative'>
              <div className='absolute h-9 w-48 bg-white/70
            top-28 z-20 left-12 rounded-md'>
                <div className='flex items-center h-full gap-2
                overflow-x-scroll w-full px-2'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                    return <div>
                      <div className='h-6 w-9 bg-blue-300'>
                        <img/>
                      </div>
                    </div>;
                  })
                  }
                </div>
              </div>
              <HorizontalCard />
            </div>
            <div className='w-72 h-40 bg-gray-100 absolute
            top-0 mt-7 ml-3 rounded-md drop-shadow-lg'></div>
          </div>
        </div>

        {/* ---------------------- */}

        {/* ------------ Middle Section ---------- */}

        <div>
          <div>
            <h1 className='text-xl font-bold'>Leaderboard</h1>
          </div>
          <div>
            <div className='gap-4 flex flex-col mt-6'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return <div className='flex'>
                  <div>
                    <div className='rounded-full bg-gray-100 overflow-hidden
                  h-14 w-14'>
                      {/* <img className='h-6 w-6'/> */}
                    </div>
                  </div>
                  <div className='px-3 w-full'>
                    <label className='text-sm font-semibold'>
                        Name
                    </label>
                    <div className='gap-2 flex flex-col'>
                      <div className='w-full'>
                        <PercentageBar percentage={(5000/7000)*100}
                          value={'23,000'}/>
                      </div>
                      <div className='w-full'>
                        <PercentageBar percentage={(230000/700000)*100}
                          color1={colors.redSecondary}
                          color2={colors.redPrimary}
                          value={'230,000'}/>
                      </div>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>

        {/* ---------------------- */}

      </div>

      {/* ---------------------- */}
      <Spacer height='1.5rem'/>
    </div>
  );
};

export default Home;

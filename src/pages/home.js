/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import TabBar from '../Components/NavBars/TabBar';
import VerticalCard from '../Components/Cards/VerticalCard';
import HorizontalCard from '../Components/Cards/HorizontalCard';
import FeaturedCard from '../Components/Cards/FeaturedCard';
import Spacer from '../Components/Basic/Spacer';
import {colors} from '../theme/colors';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {getstreemingmovies, getforrentmovies, getontheatermovies, getmoviesbydate, getupcoming, getlatestmovie} from '../Redux/Actions/movies';
import soundWaves from '../Images/sound-waves.svg';
import PercentageBar from '../Components/Basic/PercentageBar';
import {strings} from '../Styles/Strings';
import {getstreemingTvShows} from '../Redux/Actions/tvShows';
import {gettrendings} from '../Redux/Actions/trending';
import {showOverlay} from '../Redux/Actions/overlay';

const Home = () => {
  const [activeDate, setActiveDate] = useState(0);
  const [date, setDate] = useState(Date.now());
  const [activeTrailer, setActiveTrailer] = useState(0);
  const {popularmovies, forrentmovies, ontheatermovies,
    moviesbydate, upcomingmovies, latestmovie} = useSelector((state) => state.movies);
  const {popularTvShows} = useSelector((state) => state.tvshows);
  const {trendings} = useSelector((state) => state.trendings);
  const [popularIndex, setpopularIndex] = useState(0);
  const _popularData = {
    0: popularmovies.results,
    1: popularTvShows.results,
    2: forrentmovies.results,
    3: ontheatermovies.results,
  };
  const dispatch = useDispatch();

  // Whats popular data
  useEffect(() => {
    switch (popularIndex) {
      case 0:
        !popularmovies.results && dispatch(getstreemingmovies());
        break;
      case 1:
        console.log('case 1');
        !popularTvShows.results && dispatch(getstreemingTvShows());
        break;
      case 2:
        !forrentmovies.results && dispatch(getforrentmovies());
        break;
      case 3:
        !ontheatermovies.results && dispatch(getontheatermovies());
        break;
      default:
        break;
    }
  }, [popularIndex]);
  // Movies by date
  useEffect(() => {
    dispatch(getmoviesbydate(date));
  }, [activeDate]);
  // Trending
  useEffect(() => {
    dispatch(gettrendings());
    dispatch(getupcoming());
    dispatch(getlatestmovie());
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
              tabList={['Streaming', 'ON TV', 'For Rent', 'In Theaters']}
              className=' text-xs md:text-sm ' onClick={(v)=>setpopularIndex(v)}/>
          </div>
          <div className='relative'>
            <div className='flex overflow-x-auto touch-pan-x hide-scrollbar gap-2 md:gap-4'>
              {_popularData[popularIndex]?.map((item, index) => {
                return <div key={index}>
                  <VerticalCard to={popularIndex != 1 ? strings.navLink4 + '?id=' + item.id : strings.navLink5 + '?id=' + item.id}
                    title={item.original_title} image={item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL + '/w500' + item.poster_path}
                    date={item.release_date} rate={(item.vote_average).toFixed(1)}/>
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
                  return <button key={index}
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
              <div className='flex overflow-x-auto touch-pan-x hide-scrollbar gap-2 md:gap-4'>
                {moviesbydate.results?.map((item, index) => {
                  return <div key={index}>
                    <VerticalCard to={strings.navLink4 + '?id=' + item.id}
                      title={item.original_title}
                      image={item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL + '/w500' + item.poster_path}
                      date={item.release_date}/>
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

        {/* ----------- Latest Movie Section ----------- */}

        <div>
          <div>
            <h1 className='text-xl font-bold'>Latest Movie of the Day</h1>
          </div>
          <div className='py-4'>
            <FeaturedCard
              title={latestmovie?.original_title}
              description={latestmovie?.overview}
              date={moment(latestmovie?.release_date).format('DD MMM, YYYY')}
              image={latestmovie?.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL + '/w500' + latestmovie.poster_path}/>
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
            relative z-10  gap-2 md:gap-4'>
              {trendings.results?.map((item, index) => {
                return <div key={index}>
                  <VerticalCard to={strings.navLink4 + '?id=' + item.id}
                    title={item.original_title}
                    image={item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL + '/w500' + item.poster_path}
                    date={item.release_date}/>
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
          <div className='relative z-10'>
            <h1 className='text-xl font-bold text-white'>Latest Trailers</h1>
          </div>
          <div className='relative py-4'>
            <div className='flex overflow-x-auto hide-scrollbar
            relative z-10'>
              {upcomingmovies.results?.map((item, index) => {
                return <div className='pr-2 scale-95 hover:scale-100 cursor-pointer'
                onClick={()=>dispatch(showOverlay(item.id))}
                key={index}
                onMouseOver={()=>{
                  activeTrailer?.index!= index && setActiveTrailer({
                    index: index,
                    src: `${item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL + '/original' + item.backdrop_path}`,
                  });
                }}>
                  <div className='h-10 w-10 absolute top-16 opacity-80
                  left-0 right-0 mx-auto border-transparent border-t-[19px]
                  border-l-[32px] border-l-white border-b-[19px] rounded-sm'/>
                  <HorizontalCard
                     title={item.original_title}
                     image={item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL + '/original' + item.backdrop_path}
                     date={item.release_date} titleColor={colors.white}
                     description={item.overview}
                    desColor={colors.primaryLight}/>
                </div>;
              })}
            </div>
          </div>
          <div className='absolute w-full h-full left-0 top-0
          overflow-hidden rounded-md'
          style={{
            backgroundImage: `url(${activeTrailer?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
              <div className='w-full h-full'
              style={{
                backgroundColor: colors.primary,
                opacity: 0.7,
              }}/>
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
                overflow-x-scroll w-full px-2 hide-scrollbar'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                    return <div key={index}>
                      <div className='h-6 w-9 bg-blue-300
                      rounded-sm overflow-hidden'>
                        <img
                      src={`${process.env.REACT_APP_MOVE_LINK}&fam=${index}`}
                        />
                      </div>
                    </div>;
                  })
                  }
                </div>
              </div>
              <HorizontalCard
              image={`${process.env.REACT_APP_MOVE_LINK}&famus`}/>
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
                return <div className='flex' key={index}>
                  <div>
                    <div className='rounded-full bg-gray-100 overflow-hidden
                  h-14 w-14'>
                      <img className='h-full w-full'
                      // eslint-disable-next-line max-len
                      src={`${process.env.REACT_APP_PERSON_LINK}&people=${index}`}/>
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

import React, {useEffect, useState} from 'react';
import TabBar from '../../Components/NavBars/TabBar';
import VerticalCard from '../../Components/Cards/VerticalCard';
import PlainButton from '../../Components/Buttons/PlainButton';
import {colors} from '../../theme/colors';
import {useSelector, useDispatch} from 'react-redux';
import {getnowplayingmovies, getpopularmovie,
  gettopratedmovies,
  getupcomingmovies} from '../../Redux/Actions/movies';

const Movies = () => {
  const {popularmovies, nowplayingmovies, upcomingmovies, topratedmovies} =
     useSelector((state) => state.movies);
  const [activeTab, setactiveTab] = useState(0);
  const dispatch = useDispatch();
  const _moviesData = {
    0: popularmovies,
    1: nowplayingmovies,
    2: upcomingmovies,
    3: topratedmovies,
  };
  useEffect(() => {
    popularmovies.results.length == 0 && dispatch(getpopularmovie(0));
    nowplayingmovies.results.length == 0 && dispatch(getnowplayingmovies(0));
    upcomingmovies.results.length == 0 && dispatch(getupcomingmovies(0));
    topratedmovies.results.length == 0 && dispatch(gettopratedmovies(0));
  }, [activeTab]);
  return (
    <>
      <div>
        <h1 className='text-xl font-bold'>Movies</h1>
      </div>
      <div className='mt-4'>
        <TabBar tabList={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']}
          className={' text-sm md:text-base '}
          onClick={(v)=>setactiveTab(v)}/>
      </div>
      <div className='flex flex-wrap gap-x-2 gap-y-4 md:gap-6 pt-4
        justify-around md:justify-start'>
        {_moviesData[activeTab].results?.map((item, index) => {
          return <div key={item}>
            <VerticalCard
            to={`/movies/details/${item.id}`}
            title={item.original_title || item.original_name}
            image={item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL+
            '/w500' + item.poster_path}
            date={item.release_date} rate={(item.vote_average).toFixed(1)}/>
          </div>;
        })
        }
      </div>
      <div className='my-10'>
        <PlainButton label={'Load More'}
          onClick={()=>{
            switch (activeTab) {
              case 0:
                dispatch(getpopularmovie(_moviesData[activeTab].page));
                break;
              case 1:
                dispatch(getnowplayingmovies(_moviesData[activeTab].page));
                break;
              case 2:
                dispatch(getupcomingmovies(_moviesData[activeTab].page));
                break;
              case 3:
                dispatch(gettopratedmovies(_moviesData[activeTab].page));
                break;
              default:
                break;
            }
          }}
          className={` w-full md:w-3/4 rounded-md text-lg font-bold flex 
           justify-center items-center mx-auto py-2 px-4 `}
          backgroundColor={colors.secondary} />
      </div>
    </>
  );
};

export default Movies;

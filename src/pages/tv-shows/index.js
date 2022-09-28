import React, {useState, useEffect} from 'react';
import VerticalCard from '../../Components/Cards/VerticalCard';
import TabBar from '../../Components/NavBars/TabBar';
import PlainButton from '../../Components/Buttons/PlainButton';
import {colors} from '../../theme/colors';
import {useSelector, useDispatch} from 'react-redux';
import {getairingtodaytvshows, getonairtvshows,
  getpopulartvshows, gettopratedtvshows} from '../../Redux/Actions/tvShows';

const TvShows = () => {
  const {popularTvShows, onAirTodayTvShows, onTvShow, topRatedTvShows} =
     useSelector((state) => state.tvshows);
  const [activeTab, setactiveTab] = useState(0);
  const dispatch = useDispatch();
  const _moviesData = {
    0: popularTvShows,
    1: onAirTodayTvShows,
    2: onTvShow,
    3: topRatedTvShows,
  };
  useEffect(() => {
    popularTvShows.results.length == 0 && dispatch(getpopulartvshows(0));
    onAirTodayTvShows.results.length == 0 && dispatch(getairingtodaytvshows(0));
    onTvShow.results.length == 0 && dispatch(getonairtvshows(0));
    topRatedTvShows.results.length == 0 && dispatch(gettopratedtvshows(0));
  }, [activeTab]);
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>TV Shows</h1>
      </div>
      <div className='mt-4'>
        <TabBar tabList={['Popular', 'Airing Today', 'On TV', 'Top Rated']}
          className={' text-sm md:text-base '}
          onClick={(v)=>setactiveTab(v)}/>
      </div>
      <div className='pt-4 w-full overflow-hidden'>
        <div className='flex flex-wrap gap-x-2 gap-y-4 md:gap-6
        justify-around md:justify-start'>
          {_moviesData[activeTab].results?.map((item) => {
            return (
              <div key={item.id}>
                <VerticalCard
                to={`/tv-shows/details/${item.id}`}
                title={item.original_name}
                image={item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL+
                '/w500' + item.poster_path}
                date={item.release_date} rate={(item.vote_average).toFixed(1)}/>
              </div>
            );
          })}
        </div>
      </div>
      <div className='my-10'>
        <PlainButton label={'Load More'}
          className={` w-full md:w-3/4 rounded-md text-lg font-bold flex 
          justify-center items-center mx-auto py-2 px-4 `}
          backgroundColor={colors.secondary}/>
      </div>
    </div>
  );
};

export default TvShows;

import React, {useState, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import Casts from '../../Components/Details/Casts';
// eslint-disable-next-line max-len
import ContentAndContributors from '../../Components/Details/ContentAndContributors';
import ExternalID from '../../Components/Details/ExternalID';
import Head from '../../Components/Details/Head';
import Keywords from '../../Components/Details/Keywords';
import Media from '../../Components/Details/Media';
import Recomendation from '../../Components/Details/Recomendation';
import Social from '../../Components/Details/Social';
import {clearmoviedetails, getmoviecredits,
  getmoviedetails} from '../../Redux/Actions/movies';
import {showOverlay} from '../../Redux/Actions/overlay';
import {colors} from '../../theme/colors';

const MoviesDetails = () => {
  const [vibrant, setVibrant] = useState(null);
  const forgorundColor = (parseInt(vibrant?.replace('#', ''), 16) >
  0xffffff / 2)? colors.primaryLight : colors.primary;
  const {id} = useParams();
  const {moviedetails, moviecredits} = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getmoviedetails(id));
    dispatch(getmoviecredits(id));
    return function cleenup() {
      dispatch(clearmoviedetails());
    };
  }, []);

  return (
    <div>
      <Head
        vibrant={vibrant}
        setVibrant={setVibrant}
        forgorundColor={forgorundColor}
        name={moviedetails?.original_title}
        overview={moviedetails?.overview}
        tagline={moviedetails?.tagline}
        posterPath={moviedetails?.poster_path}
        backdropPath={moviedetails?.backdrop_path}
        releaseDate={moviedetails?.release_date}
        voteAverage={moviedetails?.vote_average}
        runtime={moviedetails?.runtime}
        genres={moviedetails?.genres}
        crew={moviecredits?.crew}
        trailerClick={() => {
          dispatch(showOverlay(id));
        }}
        />
      <div className='flex flex-wrap'>
        <div className='w-full md:w-4/6 mt-10 md:mb-10'>
          <Casts/>
          <Social/>
          <Media/>
          <Recomendation/>
        </div>
        <div className='w-full md:w-2/6 my-10 md:px-10'>
          <ExternalID/>
          <div className='my-6'>
            <div className='py-2'>
              <h2 className='font-semibold'>Status</h2>
              <h2 className='font-light leading-4 text-sm'>Released</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Original Language</h2>
              <h2 className='font-light leading-4 text-sm'>English</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Budget</h2>
              <h2 className='font-light leading-4 text-sm'>$250,000,000.00</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Revenue</h2>
              <h2 className='font-light leading-4 text-sm'>$755,000,000.00</h2>
            </div>
          </div>
          <Keywords/>
          <ContentAndContributors vibrant={vibrant}
            forgroundColor={forgorundColor}/>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;

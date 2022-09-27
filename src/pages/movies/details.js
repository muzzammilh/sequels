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
import {clearmoviedetails, getexternallinks, getmoviecredits,
  getmoviedetails,
  getmovieimagesandviedos,
  getmoviekeywords,
  getmovierecomendations,
  getmoviereviews} from '../../Redux/Actions/movies';
import {showOverlay} from '../../Redux/Actions/overlay';
import {colors} from '../../theme/colors';

const MoviesDetails = () => {
  const [vibrant, setVibrant] = useState(null);
  const forgorundColor = (parseInt(vibrant?.replace('#', ''), 16) >
  0xffffff / 2)? colors.primaryLight : colors.primary;
  const {id} = useParams();
  const {moviedetails, moviecredits, moviereviews,
    moviekeywords, movieexternalids, movieimages,
    movievideos, movierecommendations} = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getmoviedetails(id));
    dispatch(getmoviecredits(id));
    dispatch(getmoviereviews(id));
    dispatch(getmoviekeywords(id));
    dispatch(getexternallinks(id));
    dispatch(getmovieimagesandviedos(id));
    dispatch(getmovierecomendations(id));
    return function cleenup() {
      dispatch(clearmoviedetails());
    };
  }, [id]);

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
          <Casts
          cast={moviecredits?.cast}/>
          <Social
          reviews={moviereviews?.results}
          />
          <Media
          posters={movieimages?.posters}
          videos={movievideos?.results}
          backdrops={movieimages?.backdrops}/>
          <Recomendation data={movierecommendations?.results}/>
        </div>
        <div className='w-full md:w-2/6 my-10 md:px-10'>
          <ExternalID ids = {movieexternalids}/>
          <div className='my-6'>
            <div className='py-2'>
              <h2 className='font-semibold'>Status</h2>
              <h2 className='font-light leading-4 text-sm'>
                {moviedetails?.status}</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Original Language</h2>
              <h2 className='font-light leading-4 text-sm'>
                {moviedetails?.original_language}</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Budget</h2>
              <h2 className='font-light leading-4 text-sm'>
              {moviedetails?.budget ? '$' + moviedetails?.budget : '-'}</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Revenue</h2>
              <h2 className='font-light leading-4 text-sm'>
              {moviedetails?.revenue ? '$' + moviedetails?.revenue : '-'}</h2>
            </div>
          </div>
          <Keywords list={moviekeywords?.keywords}/>
          <ContentAndContributors vibrant={vibrant}
            forgroundColor={forgorundColor}
            />
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;

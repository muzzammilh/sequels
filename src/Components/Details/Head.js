import React, {useEffect, useMemo} from 'react';
import Vibrant from 'node-vibrant';
import {colors} from '../../theme/colors';
import {Link} from 'react-router-dom';
import CircleProgress from '../../Components/CircleProgress';
import IconButton from '../../Components/Buttons/IconButton';
import {DetailIcons} from '../../Styles/detailIcons';
import moment from 'moment';

const Head = ({vibrant, setVibrant, forgorundColor, name, tagline,
  releaseDate, overview, voteAverage, runtime, crew, genres, posterPath,
  backdropPath, trailerClick}) => {
  const crewMap = useMemo(() => {
    const list = {};
    crew?.map((item) => {
      if (item.popularity > 2.5) {
        list[item.id] = {
          name: item.name,
          job: [...(list[item.id]?.job || []), item.job],
        };
      }
    });
    return list;
  }, [crew]);
  const submit = async (imgUrl) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = imgUrl;
    const paletteData = await Vibrant.from(image).getPalette();
    console.log('paletteData', paletteData);
    setVibrant(paletteData.Vibrant.hex);
  };
  useEffect(() => {
    submit(process.env.REACT_APP_TMDB_IMAGE_URL +
      '/original' + posterPath);
  }, [posterPath]);

  return (
    <div>
      {/* ------------------Web View----------------------- */}

      <div className='w-full min-h-[70vh] bg-gray-200 rounded-md
         relative justify-center items-center hidden md:flex'
      style={{
        backgroundImage:
          vibrant&&
          // eslint-disable-next-line max-len
          `url(${process.env.REACT_APP_TMDB_IMAGE_URL}/original${backdropPath})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <div className='w-full h-full absolute -z-10 rounded-md'
          style={{background: `linear-gradient(90deg,
            ${vibrant} 0%, ${vibrant}D0 100%)`}}/>
        <div className='m-8 px-2 relative w-full md:flex gap-3'>
          <div>
            <div className='w-72 2xl:w-80 rounded-md overflow-hidden'>
              <div className='h-[50vh] w-full bg-gray-50 overflow-hidden'>
              {posterPath&&
                <img src={process.env.REACT_APP_TMDB_IMAGE_URL +
                  '/w500' + posterPath}
                alt='poster'
                className='w-full object-cover'/>}
              </div>
              <div>
                <div className='flex justify-center items-center py-4'
                  style={{backgroundColor: colors.primary,
                    color: colors.primaryLight}}>
                  <div className='w-9 h-9 rounded-sm overflow-hidden'>
                    <img src='https://www.themoviedb.org/t/p/original/ajbCmwvZ8HiePHZaOVEgm9MzyuA.jpg'
                      className='w-full object-cover h-full'/>
                  </div>
                  <div className='pl-2 leading-4'>
                    <h4 className='opacity-60 font-light'>
                        Now Streaming</h4>
                    <div className='leading-5'>
                        Watch Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 w-full'
            style={{color: forgorundColor}}>
            <h1 className='text-3xl font-bold '>
                {name}
                <span className='font-light'>
                  ({moment(releaseDate).year()})
                </span>
            </h1>
            <div className='text-sm font-light flex items-center mt-1'>
              <span className='border opacity-60 px-1 mr-2'
                style={{borderColor: forgorundColor}}>
                  PG-13
              </span>
              <span>
                  {moment(releaseDate).format('MM/DD/YYYY')} (US)
              </span>
              <div className='w-1 h-1 rounded-full mx-2'
                style={{backgroundColor: forgorundColor}}> </div>
              <span>
                {genres?.map(({name, id}, index) =>
                    <Link to='/' key={id}>{index!=0&&', '}{name}</Link>)}
              </span>
              <div className='w-1 h-1 rounded-full mx-2'
                style={{backgroundColor: forgorundColor}}> </div>
              <span>
                  {Math.floor(runtime/60)}h {''}
                  {runtime%60}m
              </span>
            </div>
            <div className='pt-6 flex items-center'>
              <div>
                <CircleProgress
                  percentage={Math.floor(voteAverage*10)}/>
              </div>
              <span className='text-sm font-bold px-2'>
                  User <br/> Score
              </span>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'list'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'heart'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'bookmark'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'star'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
              <button className='flex justify-center items-center'
              onClick={trailerClick}>
                <span className='px-1'>
                  <DetailIcons name={'play'} color={forgorundColor}/></span>
                  Play Trailer
              </button>
            </div>
            <div className='py-2'>
              <p className='font-light italic opacity-70'>
                  {tagline}</p>
            </div>
            <h1 className='text-xl font-semibold'>Overview</h1>
            <p className='text-sm font-light'>
              {overview}
            </p>
            <div className='grid grid-cols-3 pt-8 gap-4'>
              {Object.keys(crewMap).map((key, index) =>{
                return <div key={key}>
                <div className='font-bold text-sm'>
                  <Link>{crewMap[key].name}</Link></div>
                <div className='text-xs font-light'>
                  {(crewMap[key].job).join(', ')}</div>
                </div>;
              })}
            </div>
          </div>

        </div>

      </div>

      {/* ----------------------------------------- */}

      {/* ------------------Mobile View----------------------- */}

      <div className='w-full min-h-[70vh] rounded-md
         relative flex flex-col md:hidden justify-center items-center
         overflow-hidden'
      style={{backgroundColor: vibrant}}>
        <div className='relative w-full bg-gray-200'
          style={{
            backgroundImage:
            // eslint-disable-next-line max-len
            vibrant&&`url(${process.env.REACT_APP_TMDB_IMAGE_URL}/original${backdropPath})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
          <div className='w-full h-[101%] absolute -z-10'
            style={{background: `linear-gradient(0deg,
            ${vibrant} 0%, ${vibrant}A0 100%)`}}/>
          <div
            className='m-4 pr-2 relative w-full md:flex items-center gap-3'>
            <div>
              <div className='w-32 rounded-md overflow-hidden h-48'>
              {posterPath&&<img
                  src={process.env.REACT_APP_TMDB_IMAGE_URL +
                    '/w500' + posterPath}
                  alt='poster'
                  className='w-full object-cover h-full bg-gray-400'/>}
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 pb-4'
          style={{color: forgorundColor}}>
          <h1 className='text-2xl font-bold '>
                {name} <span className='font-light'>
                  ({moment(releaseDate).year()})</span>
          </h1>
          <div className='py-4 grid grid-cols-2 items-center'>
            <div className='flex justify-center items-center px-2'>
              <CircleProgress radius={35}
                percentage={Math.floor(voteAverage*10)}/>
              <span className='text-sm font-bold px-2'>
                  User Score
              </span>
            </div>
            <button className='flex justify-center items-center border-l'
            onClick={trailerClick}>
              <span className='pr-2'>
                <DetailIcons name={'play'} color={forgorundColor}/></span>
              <a>Play Trailer</a>
            </button>
          </div>
          <div className='flex justify-evenly pb-4'>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'list'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'heart'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'bookmark'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
              <div className='px-2'>
                <IconButton icon={<DetailIcons name={'star'}
                  color={colors.primaryLight}/>}
                backgroundColor={colors.primary}/>
              </div>
          </div>
          <div className='py-6 bg-black/5'>
            <div className='text-sm font-light flex items-center mt-1
            flex-wrap max-w-[16rem] mx-auto justify-center px-2'>
              <span className='border opacity-60 px-1 mr-2'
                style={{borderColor: forgorundColor}}>
                  PG-13
              </span>
              <span>
                {moment(releaseDate).format('MM/DD/YYYY')} (US)
              </span>
              <div className='w-1 h-1 rounded-full mx-2'
                style={{backgroundColor: forgorundColor}}> </div>
              <span>
                {Math.floor(runtime/60)}h {''} {runtime%60}m
              </span>
              <div className='w-1 h-1 rounded-full mx-2'
                style={{backgroundColor: forgorundColor}}> </div>
              <span>
                {genres?.map(({name, id}, index) =>
                    <Link to='/' key={id}>{index!=0&&', '}{name}</Link>)}
              </span>
            </div>
          </div>
          <div className='py-2'>
            <p className='font-light italic opacity-70'>{tagline}</p>
          </div>
          <h1 className='text-xl font-semibold'>Overview</h1>
          <p className='text-sm font-light'>{overview}</p>
          <div className='grid grid-cols-2 pt-8 gap-4'>
            {Object.keys(crewMap).map((key, index) =>{
              return <div key={key}>
              <div className='font-bold text-sm'>
                <Link>{crewMap[key].name}</Link></div>
              <div className='text-xs font-light'>
                {(crewMap[key].job).join(', ')}</div>
              </div>;
            })}
          </div>
        </div>
      </div>

      {/* ----------------------------------------- */}

    </div>
  );
};

export default Head;

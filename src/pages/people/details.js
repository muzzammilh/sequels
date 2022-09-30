import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {clearpeopledetails, getpeoplecombinedcredits,
  getpeopledetails,
  getpeopleexternalids} from '../../Redux/Actions/people';
import {Icon} from '../../Styles/icons';

const PeopleDetails = () => {
  const {colors} = useSelector((state) => state.theme);
  const {id} = useParams();
  const {personDetails, personCredits,
    personExternalIds} = useSelector((state) => state.people);
  const actingMemo = useMemo(()=>{
    const acting = {};
    personCredits?.cast?.map((item)=>{
      acting[item.release_date?.split('-')[0] ||
      item.first_air_date?.split('-')[0] || '----'] =
      [...(acting[item.release_date?.split('-')[0]] || []), item];
    });
    return acting;
  }, [personCredits]);
  const productionMemo = useMemo(()=>{
    const production = {};
    personCredits?.crew?.map((item)=>{
      production[item.release_date?.split('-')[0] ||
      item.first_air_date?.split('-')[0] || '----'] =
      [...(production[item.release_date?.split('-')[0]] || []), item];
    });
    return production;
  }, [personCredits]);
  const knownFor = useMemo(()=>{
    return personCredits?.cast?.filter((item)=>item.vote_average>7);
  }, [personCredits]);
  const gender = {
    1: 'Female',
    2: 'Male',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpeopledetails(id));
    dispatch(getpeoplecombinedcredits(id));
    dispatch(getpeopleexternalids(id));
    return () => {
      dispatch(clearpeopledetails());
    };
  }, [id]);
  return (
    <div className='flex flex-wrap'>
      <div className='w-full md:w-1/4'>
        <div className='w-full rounded-md bg-gray-200 h-96 overflow-hidden'>
          <img className='w-full h-full object-cover'
          src={
            personDetails?.profile_path&&process.env.REACT_APP_TMDB_IMAGE_URL+
            '/w500' + personDetails?.profile_path}/>
        </div>
        <div className='py-4 grid grid-cols-2'>
          <div className='px-4 md:px-0 flex flex-wrap justify-center
          md:justify-start gap-2 md:gap-6'>
            {personExternalIds?.facebook_id && <a
            href={process.env.REACT_APP_FACEBOOK_LINK +
              personExternalIds.facebook_id}
              target='_blank' rel="noreferrer"><Icon name={'facebook'}
              color={colors.primary}/></a>}
            {personExternalIds?.twitter_id &&<a
              href={process.env.REACT_APP_TWITTER_LINK +
                personExternalIds.twitter_id}
              target='_blank' rel="noreferrer"><Icon name={'twitter'}
              color={colors.primary}/></a>}
            {personExternalIds?.instagram_id&&<a
              href={process.env.REACT_APP_FACEBOOK_LINK +
                personExternalIds.instagram_id}
              target='_blank' rel="noreferrer"><Icon name={'instagram'}
              color={colors.primary}/></a>}
          </div>
          <div className='md:hidden border-l px-4'>
            <h1 className='text-2xl font-bold'>{personDetails?.name}</h1>
          </div>
        </div>
        <div className='mt-4'>
          <h2 className='text-xl font-semibold'>Personal Info</h2>
        </div>
        <div className='grid grid-cols-2 gap-x-4 md:grid-cols-1'>
          <div className='py-2'>
            <h4 className='font-semibold'>Known For</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>
                {personDetails?.known_for_department}</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Known Credit</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>
                {personDetails?.also_known_as.length}</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Gender</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>{gender[personDetails?.gender]}</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Birthday</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>
                {personDetails?.birthday} (24 years old)</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Place of Birth</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>{personDetails?.place_of_birth}</h5>
          </div>
        </div>
      </div>
      <div className='w-full md:w-3/4 md:px-6'>
        <h1 className='text-3xl font-bold hidden md:block'>
          {personDetails?.name}</h1>
        <div className='pt-6'>
          <h2 className='text-xl font-semibold'>Biography</h2>
          <div className='text-sm font-light py-2 flex flex-col gap-4'>
            <p>
              {personDetails?.biography}
            </p>
          </div>
        </div>
        <div className='pt-6'>
          <h2 className='text-xl font-semibold'>Known For</h2>
          <div className='relative py-4'>
            <div className='flex gap-3 overflow-x-auto hide-scrollbar'>
              {knownFor?.map((item, index) => {
                return (
                  <Link
                  to={item.media_type=='tv'?`/tv-shows/details/${item.id}`:
                  `/movies/details/${item.id}`} key={index}>
                    <div
                      className='w-32 rounded-md bg-gray-200 h-48
                    overflow-hidden'>
                      <img className='w-full h-full object-cover'
                      src={
                        item.poster_path&&process.env.REACT_APP_TMDB_IMAGE_URL+
                        '/w500' + item.poster_path}/>
                    </div>
                    <div className='flex justify-center pt-1 text-sm px-2'>
                      <label className='text-center leading-4'>
                        {item.original_title || item.original_name}</label>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className='h-full absolute md:w-5 right-0 top-0'
            style={{
              // eslint-disable-next-line max-len
              background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, ' + colors.white + ' 100%)',
             }}/>
          </div>
        </div>
        {Object.keys(actingMemo).length != 0&&<div className='my-6'>
          <h2 className='text-xl font-semibold'>Acting</h2>
          <div className='border text-sm my-4'>
            {Object.keys(actingMemo).map((key) => {
              return <div key={key} className='border-b py-2'>
                {actingMemo[key].map((item)=>{
                return (
                  <div key={item.id} className='px-4 py-2 w-full
                  flex flex-wrap gap-4'>
                    <div>
                      {key}
                    </div>
                    <div className='border-l'/>
                    <div>
                      <Link className='font-semibold'
                      to={item.media_type == 'tv'?
                      `/tv-shows/details/${item.id}`:
                      `/movies/details/${item.id}`}>
                        {item.original_title ||item.original_name} </Link>
                      <span className='font-light'
                        style={{color: colors.gray}}>
                        {item.episode_count &&<span>{'('}
                        <Link className='hover:underline'to={'#'}>
                        {item.episode_count +
                        ' episodes'}</Link>{') '}</span>}
                        {item.character&&'as'} </span>{item.character}
                    </div>
                  </div>
                );
              })} </div>;
            }).reverse()}
          </div>
        </div>}
        {Object.keys(productionMemo).length != 0&&<div className='my-6'>
          <h2 className='text-xl font-semibold'>Production</h2>
          <div className='border text-sm my-4'>
            {Object.keys(productionMemo).map((key) => {
              return <div key={key} className='border-b py-2'>
                {productionMemo[key].map((item)=>{
                return (
                  <div key={item.id} className='px-4 py-2 w-full
                  flex flex-wrap gap-4'>
                    <div>
                      {key}
                    </div>
                    <div className='border-l'/>
                    <div>
                      <Link className='font-semibold'>
                        {item.original_title ||item.original_name}</Link>
                        <span className='font-light'
                        style={{color: colors.gray}}> ... </span>
                        {item.job}
                    </div>
                  </div>
                );
              })} </div>;
            }).reverse()}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default PeopleDetails;

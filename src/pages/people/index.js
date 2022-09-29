import React, {useEffect} from 'react';
import {colors} from '../../theme/colors';
import PlainButton from '../../Components/Buttons/PlainButton';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getpopularpeople} from '../../Redux/Actions/people';
const People = () => {
  const {popularPeople} = useSelector((state) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpopularpeople(0));
  }, []);
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>Populor People</h1>
      </div>
      <div>
        <div className='flex flex-wrap gap-4 py-4 justify-evenly
        md:justify-start'>
          {popularPeople.results?.map((item, index) => {
            return (
              <Link to={'/people/details/' + item.id}
              key={item.id} className='w-40'>
                <div className='w-full h-52 rounded-md overflow-hidden'>
                  <img
                    key={index}
                    src={
                      item.profile_path&&process.env.REACT_APP_TMDB_IMAGE_URL+
                      '/w500' + item.profile_path}
                    alt='person'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='py-2'>
                  <h2 className='font-semibold'>{item.name}</h2>
                  <p className='text-sm font-light overflow-ellipsis
                  whitespace-normal overflow-hidden'
                  style={{'-webkit-box-orient': 'vertical',
                    'display': '-webkit-box',
                    '-webkit-line-clamp': '1',
                    'color': colors.gray}}>
                    {(item.known_for.map((v)=>
                    v.original_title || v.original_name)).join(', ')}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='mb-5'>
        <PlainButton label={'Load More'}
          className={` w-full md:w-3/4 rounded-md text-lg font-bold flex 
          justify-center items-center mx-auto py-2 px-4 `}
          onClick={() => dispatch(getpopularpeople(popularPeople.page))}
          backgroundColor={colors.secondary}/>
      </div>
    </div>
  );
};

export default People;

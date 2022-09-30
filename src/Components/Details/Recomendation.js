import React from 'react';
import HorizontalCard from '../Cards/HorizontalCard';
import {useSelector} from 'react-redux';

const Recomendation = ({data}) => {
  const {colors} = useSelector((state) => state.theme);
  return (
    <div className='py-4'>
      <div>
        <h2 className='font-semibold text-2xl'>Recomendation</h2>
      </div>
      <div className='relative'>
        <div className='flex gap-2 md:gap-3 py-4 overflow-x-auto'>
          {
            data?.map((item, index)=>{
              return <div key={item.id}>
                <HorizontalCard
                to={`/${item.media_type == 'tv' ? 'tv-shows':
                'movies'}/details/${item.id}`}
                image={item.backdrop_path &&
                  process.env.REACT_APP_TMDB_IMAGE_URL +
                  '/w500' + item.backdrop_path}
                  title={item.original_title || item.original_name}
                  description={item.overview}
                  rate={(item.vote_average).toFixed(1)}/>
              </div>;
            })
          }
        </div>
        <div className='absolute h-full top-0 right-0 md:w-6'
        style={{
          // eslint-disable-next-line max-len
          background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, ' + colors.white + ' 100%)',
         }}/>
      </div>
    </div>
  );
};

export default Recomendation;

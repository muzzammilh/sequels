import React from 'react';
import HorizontalCard from '../Cards/HorizontalCard';

const Recomendation = ({data}) => {
  return (
    <div className='py-4'>
      <div>
        <h2 className='font-semibold text-2xl'>Recomendation</h2>
      </div>
      <div className='relative'>
        <div className='flex gap-2 md:gap-4 py-4 overflow-x-auto'>
          {
            data?.map((item, index)=>{
              return <div key={item.id}>
                <HorizontalCard
                to={`/${item.media_type == 'tv' ? 'tv-shows':
                'movies'}/details/${item.id}`}
                image={item.backdrop_path &&
                  process.env.REACT_APP_TMDB_IMAGE_URL +
                  '/w500' + item.backdrop_path}
                  title={item.original_title}
                  description={item.overview}
                  rate={(item.vote_average).toFixed(1)}/>
              </div>;
            })
          }
        </div>
        <div className='absolute h-full top-0 right-0 md:w-6
        bg-gradient-to-l from-white'/>
      </div>
    </div>
  );
};

export default Recomendation;

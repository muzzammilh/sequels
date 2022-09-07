import React from 'react';
import Casts from '../../Components/Details/Casts';
import Head from '../../Components/Details/Head';

const MoviesDetails = () => {
  return (
    <div>
      <Head/>
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <Casts/>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;

import React, {useState} from 'react';
import Casts from '../../Components/Details/Casts';
// eslint-disable-next-line max-len
import ContentAndContributors from '../../Components/Details/ContentAndContributors';
import ExternalID from '../../Components/Details/ExternalID';
import Head from '../../Components/Details/Head';
import Keywords from '../../Components/Details/Keywords';
import Media from '../../Components/Details/Media';
import Recomendation from '../../Components/Details/Recomendation';
import Sessions from '../../Components/Details/Session';
import Social from '../../Components/Details/Social';
import {colors} from '../../theme/colors';

const TvShowDetails = () => {
  const [vibrant, setVibrant] = useState(null);
  const forgorundColor = (parseInt(vibrant?.replace('#', ''), 16) >
  0xffffff / 2)? colors.primaryLight : colors.primary;
  return (
    <div>
      <Head vibrant={vibrant} setVibrant={setVibrant}
        forgorundColor={forgorundColor}/>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-4/6 mt-10 md:mb-10'>
          <Casts/>
          <Sessions/>
          <Social/>
          <Media/>
          <Recomendation/>
        </div>
        <div className='w-full md:w-2/6 my-10 md:px-10'>
          <ExternalID/>
          <div className='my-6'>
            <div className='py-2'>
              <h2 className='font-semibold'>Fact</h2>
              {/* <h2 className='font-light leading-4 text-sm'>Released</h2> */}
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Original Name</h2>
              <h2 className='font-light leading-4 text-sm'>
                S.O.Z: Soldados o Zonmbies</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Status</h2>
              <img src='https://www.themoviedb.org/t/p/h60/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.svg'
                className='h-8 mt-2'/>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Type</h2>
              <h2 className='font-light leading-4 text-sm'>Scripted</h2>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold'>Original Language</h2>
              <h2 className='font-light leading-4 text-sm'>English</h2>
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

export default TvShowDetails;

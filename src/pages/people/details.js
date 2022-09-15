import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from '../../Styles/icons';
import {colors} from '../../theme/colors';

const PeopleDetails = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='w-full md:w-1/4'>
        <div className='w-full rounded-md bg-gray-200 h-96'>
          <img src='https://api.lorem.space/image/movie?w=150&h=220&profileImage'/>
        </div>
        <div className='py-4 grid grid-cols-2'>
          <div className='px-4 flex flex-wrap justify-center gap-2'>
            <Icon name={'instagram'}/>
          </div>
          <div className='md:hidden border-l px-4'>
            <h1 className='text-2xl font-bold'>Xaria Dotson</h1>
          </div>
        </div>
        <div className='mt-4'>
          <h2 className='text-xl font-semibold'>Personal Info</h2>
        </div>
        <div className='grid grid-cols-2 gap-x-4 md:grid-cols-1'>
          <div className='py-2'>
            <h4 className='font-semibold'>Known For</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>Acting</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Known Credit</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>4</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Gendert</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>Female</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Gender</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>Female</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Birthday</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>1997-12-27 (24 years old)</h5>
          </div>
          <div className='py-2'>
            <h4 className='font-semibold'>Place of Birth</h4>
            <h5 className='text-sm font-light'
              style={{color: colors.gray}}>Portland, Oregon, U.S.A</h5>
          </div>
        </div>
      </div>
      <div className='w-full md:w-3/4 md:px-6'>
        <h1 className='text-3xl font-bold hidden md:block'>Xaria Dotson</h1>
        <div className='pt-6'>
          <h2 className='text-xl font-semibold'>Biography</h2>
          <div className='text-sm font-light py-2 flex flex-col gap-4'>
            <p>
              {`Xaria's first introduction to lights and cameras came at the
          young age of 9 months in a print ad for Fred Meyer. With both
          parents working at ABC Kids and Teens, a vocational school
          for acting and modeling, it's easy to say Xaria literally
          cut her teeth as she grew up in the creative entertainment
          market of Portland. Her interests in acting and storytelling
          truly began to grow as she participated in theater productions
          during her grade school and middle school years. She went on
          to study digital media while also working on commercial
          sets such as Lincoln Navigator and Google, which has helped
          prepare for larger more substantial
          roles. In 2013 she won the best acting award as a new talent
          in the Portland 48 hour film festival for her performance
          as Elizabeth Jensen in "Red Courage".`}
            </p>
            <p>
              {`In 2018 Xaria landed the role of Tori Carucci in American
          Vandal Season 2(Netflix) and currently stars in Crypt
          TV's new series for Facebook Watch's "The Birch."`}
            </p>
          </div>
        </div>
        <div className='pt-6'>
          <h2 className='text-xl font-semibold'>Known For</h2>
          <div className='relative py-4'>
            <div className='flex gap-3 overflow-x-auto hide-scrollbar'>
              {[...Array(10)].map((item, index) => {
                return (
                  <Link to={'/movies/details?id=1'} key={index}>
                    <div
                      className='w-32 rounded-md bg-gray-200 h-48
                    overflow-hidden'>
                      <img src={`https://api.lorem.space/image/movie?w=150&h=220&${index}`}/>
                    </div>
                    <div className='flex justify-center pt-1 text-sm px-2'>
                      <label className='text-center leading-4'>
                        The Birch</label>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className='h-full absolute md:w-5 right-0 top-0
           bg-gradient-to-l from-white'/>
          </div>
        </div>
        <div className='my-6'>
          <h2 className='text-xl font-semibold'>Acting</h2>
          <div className='border text-sm my-4'>
            {[...Array(5)].map((item, index) => {
              return (
                <div key={index} className='px-4 py-4 w-full border-b
                flex flex-wrap gap-4'>
                  <div>
                    2022
                  </div>
                  <div className='border-l'/>
                  <div>
                    <Link className='font-semibold'>Devil in Ohio </Link>
                    <span className='font-light'
                      style={{color: colors.gray}}>
                      (<Link className='hover:underline'>8 episodes</Link>)
                      as </span>Jules Mathis
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;

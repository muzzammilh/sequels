import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from '../../Styles/icons';
import {useSelector} from 'react-redux';

const Sessions = () => {
  const {colors} = useSelector((state) => state.theme);
  const reviews = () => {
    return <div className='w-full h-48 my-4 flex border rounded-md shadow-md
    overflow-hidden'
    style={{backgroundColor: colors.white}}>
      <div>
        <div className='w-32 h-full bg-gray-200
        overflow-hidden'>
          <img src='https://www.themoviedb.org/t/p/w260_and_h390_bestv2/aUryEjcLsX209xVzisE6g2f0ETB.jpg'
            className='object-cover h-full w-full object-center'/>
        </div>
      </div>
      <div className='px-6 flex flex-col justify-center'>
        <h2 className='font-bold text-xl'>Session 2</h2>
        <div className='font-bold text-xs'>2019 | 10 Episodes</div>
        <p className='pt-4 text-sm'>
          <span className='font-light overflow-ellipsis
          whitespace-normal overflow-hidden'
          style={{'-webkit-box-orient': 'vertical',
            'display': '-webkit-box',
            '-webkit-line-clamp': '3'}}>
            {`What a superbly intricate piece of comedic cinema this is.
          Keaton is adown-at-heel cinema projectionistwho fancies himself
          as a budding "Sherlock Holmes". When a love-rival manages to
          frame him for pinching his (rather fickle) girlfriend's father's
          watch his life seems to have lost all purpose... Only when he
          returns to his cinema and runs that evening's movie does he
          doze off and dream his way into the film - this time as a
          brilliant detective calmly dealing with poison, explosives
          and dastardly cunning plots as he effortlessly solves
          the crime - some stolen pearls - and gets the girl!`}
          </span>
          <button className='text-xs underline'>Read More</button>
        </p>
      </div>
    </div>;
  };

  return (
    <div className='py-4'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='font-semibold text-2xl'>Session</h2>
        <Link className='text-sm font-light' to='#'>
          <div className='flex gap-2 items-center underline'
            style={{color: colors.primary}}>
            View All Seasons
            <Icon name={'arrow-right'}/>
          </div>
        </Link>
      </div>
      <div>
        {reviews()}
      </div>
    </div>
  );
};

export default Sessions;

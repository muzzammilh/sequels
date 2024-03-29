import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from '../../Styles/icons';
import {colors} from '../../theme/colors';
import TabBar from '../NavBars/TabBar';

const Social = () => {
  const [active, setActive] = React.useState(0);

  const reviews = () => {
    return <div className='w-full p-4 my-4 flex border rounded-md'
      style={{backgroundColor: colors.white}}>
      <div>
        <div className='w-20 h-20 rounded-full bg-gray-200
        overflow-hidden'>
          <img src='https://www.themoviedb.org/t/p/w300_and_h300_face/6ZpVUJzqXMzH35VprEtnX0sNI3.jpg'/>
        </div>
      </div>
      <div className='px-6'>
        <h2 className='font-bold text-xl'>CinemaSerf</h2>
        <div className='font-light text-xs'
          style={{color: colors.gray}}>June 6, 2022</div>
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

  const discussions = () => {
    return <div className='w-full p-4 my-4 border rounded-md grid
    grid-cols-5 '
    style={{backgroundColor: colors.white}}>
      <div className='flex items-center col-span-5 md:col-span-2'>
        <div>
          <div className='w-10 h-10 rounded-full bg-gray-200
      overflow-hidden'>
            <img src='https://www.themoviedb.org/t/p/w300_and_h300_face/6ZpVUJzqXMzH35VprEtnX0sNI3.jpg'/>
          </div>
        </div>
        <Link className='text-sm font-light overflow-ellipsis
        whitespace-normal overflow-hidden px-3'
        style={{'-webkit-box-orient': 'vertical',
          'display': '-webkit-box',
          '-webkit-line-clamp': '1'}}>
          {`What a superbly intricate piece of comedic cinema this is.
        Keaton is adown-at-heel cinema projectionistwho fancies himself
        as a budding "Sherlock Holmes". When a love-rival manages to
        frame him for pinching his (rather fickle) girlfriend's father's
        watch his life seems to have lost all purpose... `}
        </Link>
      </div>
      <div className='flex md:justify-center items-center text-sm font-light
      border-r md:border-none mt-2 md:m-0'
      style={{color: colors.gray}}>
        Open
      </div>
      <div className='flex justify-center items-center text-sm font-light
      border-r md:border-none mt-2 md:m-0'
      style={{color: colors.gray}}>
        4
      </div>
      <div className='font-light text-xs float-right text-right
      flex flex-col justify-center col-span-3 md:col-span-1 mt-2 md:m-0'
      style={{color: colors.gray}}>
        <div>Dec 17, 2020 at 7:09 AM</div>
        <div>by <a className='font-normal'
          style={{color: colors.primary}}>CinemaSerf</a></div>
      </div>
    </div>;
  };

  const show = () => {
    switch (active) {
      case 1:
        return discussions();
      default:
        return reviews();
    }
  };

  return (
    <div className='py-4'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='font-semibold text-2xl'>Social</h2>
        <Link className='text-sm font-light' to='#'>
          <div className='flex gap-2 items-center underline'
            style={{color: colors.primary}}>
            {active==0? 'Read All Reviews' : 'Go to Discussions'}
            <Icon name={'arrow-right'}/>
          </div>
        </Link>
      </div>
      <div className='mt-2'>
        <TabBar tabList={['Reviews', 'Discussions']}
          className='text-xs md:text-sm ' onClick={(value)=>{
            setActive(value);
          }}/>
      </div>
      <div>
        {show()}
      </div>
    </div>
  );
};

export default Social;

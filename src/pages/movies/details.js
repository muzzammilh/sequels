import React, {useEffect, useState} from 'react';
import Vibrant from 'node-vibrant';
import {colors} from '../../theme/colors';
import {Link} from 'react-router-dom';
import CircleProgress from '../../Components/CircleProgress';
import IconButton from '../../Components/Buttons/IconButton';
import {DetailIcons} from '../../Styles/detailIcons';

const MoviesDetails = () => {
  const [vibrant, setVibrant] = useState(null);
  const myColor = (parseInt(vibrant?.replace('#', ''), 16) >
  0xffffff / 2)? colors.primaryLight : colors.primary;

  const submit = async (imgUrl) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = imgUrl;
    const paletteData = await Vibrant.from(image).getPalette();
    console.log('paletteData', paletteData);
    setVibrant(paletteData.Vibrant.hex);
  };
  useEffect(() => {
    submit('https://flxt.tmsimg.com/assets/p10036528_p_v12_ag.jpg');
  }, []);
  return (
    <div>
      <div>
        <div className='w-full min-h-[60vh] bg-gray-200 rounded-md
         relative flex justify-center items-center'
        style={{
          backgroundImage: 'url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/dlLxQN5tQupwwdJCLepD7yVvwMu.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div className='w-full h-full absolute -z-10 rounded-md'
            style={{background: `linear-gradient(90deg,
            ${vibrant} 0%, ${vibrant}D0 100%)`}}/>
          <div className='m-8 px-2 relative w-full md:flex items-center gap-3'>
            <div>
              <div className=' w-64 h-[50vh] bg-black rounded-md'>
                <img src='https://flxt.tmsimg.com/assets/p10036528_p_v12_ag.jpg'
                  alt='poster'
                  className='w-full h-full object-cover rounded-md'/>
              </div>
            </div>
            <div
              style={{color: myColor}}>
              <h1 className='text-3xl font-bold '>
                Romeo & Juliet <span className='font-light'>(2013)</span>
              </h1>
              <div className='text-sm font-light flex items-center mt-1'>
                <span className='border opacity-60 px-1 mr-2'
                  style={{borderColor: myColor}}>
                  PG-13
                </span>
                <span>
                  10/07/2013 (US)
                </span>
                <div className='w-1 h-1 rounded-full mx-2'
                  style={{backgroundColor: myColor}}> </div>
                <span>
                  <Link to='/'>Drama</Link>, <Link to='/'>Romance</Link>
                </span>
                <div className='w-1 h-1 rounded-full mx-2'
                  style={{backgroundColor: myColor}}> </div>
                <span>
                  1h 58m
                </span>
              </div>
              <div className='pt-6 flex items-center'>
                <div>
                  <CircleProgress/>
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
              </div>
              <div className='py-2'>
                <p className='font-light italic opacity-70'>
                  The most dangerous love story ever told.</p>
              </div>
              <h1 className='text-xl font-semibold'>Overview</h1>
              <p className='text-sm font-light'>
              In Verona, bad blood between the Montagueand Capulet families
              leadsto much bitterness.Despite the hostility, Romeo Montague
              manages an invitation to a masked ball at the estate of the
              Capulets and meets Juliet, their daughter. The two are instantly
              smitten but dismayed to learn that their families are enemies.
              Romeo and Juliet figure out a way to pursue their romance,
              but Romeo is banished for his part in the slaying of {'Juliet\'s'}
              cousin, Tybalt.
              </p>
              <div className='grid grid-cols-3 pt-8'>
                <div>
                  <div className='font-bold text-sm'>
                    <Link>Carlo Carlei</Link></div>
                  <div className='text-xs font-light'>Director</div>
                </div>
                <div>
                  <div className='font-bold text-sm'>
                    <Link>Julian Fellowes</Link></div>
                  <div className='text-xs font-light'>Screenplay</div>
                </div>
                <div>
                  <div className='font-bold text-sm'>
                    <Link>William Shakespeare</Link></div>
                  <div className='text-xs font-light'>Story</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;

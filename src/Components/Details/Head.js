import React, {useEffect, useState} from 'react';
import Vibrant from 'node-vibrant';
import {colors} from '../../theme/colors';
import {Link} from 'react-router-dom';
import CircleProgress from '../../Components/CircleProgress';
import IconButton from '../../Components/Buttons/IconButton';
import {DetailIcons} from '../../Styles/detailIcons';

const Head = () => {
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
      {/* ------------------Web View----------------------- */}

      <div className='w-full min-h-[70vh] bg-gray-200 rounded-md
         relative justify-center items-center hidden md:flex'
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
            <div className='w-72 rounded-md overflow-hidden'>
              <img src='https://flxt.tmsimg.com/assets/p10036528_p_v12_ag.jpg'
                alt='poster'
                className='w-full object-cover h-[50vh]'/>
              <div>
                <div className='flex justify-center items-center py-4'
                  style={{backgroundColor: colors.primary,
                    color: colors.primaryLight}}>
                  <div className='w-9 h-9 rounded-sm overflow-hidden'>
                    <img src='https://www.themoviedb.org/t/p/original/ajbCmwvZ8HiePHZaOVEgm9MzyuA.jpg'
                      className='w-full object-cover h-full'/>
                  </div>
                  <div className='pl-2 leading-4'>
                    <h4 className='opacity-60 font-light'>
                        Now Streaming</h4>
                    <div className='leading-5'>
                        Watch Now</div>
                  </div>
                </div>
              </div>
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
              <div className='flex justify-center items-center'>
                <span className='px-1'>
                  <DetailIcons name={'play'} color={myColor}/></span>
                <a>Play Trailer</a>
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
            <div className='grid grid-cols-3 pt-8 gap-4'>
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

      {/* ----------------------------------------- */}

      {/* ------------------Mobile View----------------------- */}

      <div className='w-full min-h-[70vh] rounded-md
         relative flex flex-col md:hidden justify-center items-center
         overflow-hidden'
      style={{backgroundColor: vibrant}}>
        <div className='relative w-full'
          style={{
            backgroundImage: 'url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/dlLxQN5tQupwwdJCLepD7yVvwMu.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
          <div className='w-full h-[101%] absolute -z-10'
            style={{background: `linear-gradient(0deg,
            ${vibrant} 0%, ${vibrant}A0 100%)`}}/>
          <div
            className='m-4 pr-2 relative w-full md:flex items-center gap-3'>
            <div>
              <div className='w-32 rounded-md overflow-hidden'>
                <img src='https://flxt.tmsimg.com/assets/p10036528_p_v12_ag.jpg'
                  alt='poster'
                  className='w-full object-cover h-48'/>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 pb-4'
          style={{color: myColor}}>
          <h1 className='text-2xl font-bold '>
                Romeo & Juliet <span className='font-light'>(2013)</span>
          </h1>
          <div className='py-4 grid grid-cols-2 items-center'>
            <div className='flex justify-center items-center px-2'>
              <CircleProgress radius={35}/>
              <span className='text-sm font-bold px-2'>
                  User Score
              </span>
            </div>
            <div className='flex justify-center items-center border-l'>
              <span className='pr-2'>
                <DetailIcons name={'play'} color={myColor}/></span>
              <a>Play Trailer</a>
            </div>
            {/* <div className='px-2'>
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
              </div> */}
          </div>
          <div className='py-6 bg-black/5'>
            <div className='text-sm font-light flex items-center mt-1
            flex-wrap max-w-[16rem] mx-auto justify-center px-2'>
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
                  1h 58m
              </span>
              <div className='w-1 h-1 rounded-full mx-2'
                style={{backgroundColor: myColor}}> </div>
              <span>
                <Link to='/'>Drama</Link>, <Link to='/'>Romance</Link>
              </span>
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
          <div className='grid grid-cols-2 pt-8 gap-4'>
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

      {/* ----------------------------------------- */}

    </div>
  );
};

export default Head;

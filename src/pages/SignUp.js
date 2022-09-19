import React from 'react';
import PlainButton from '../Components/Buttons/PlainButton';
import Input from '../Components/Input/Input';
import {Icon} from '../Styles/icons';
import NavIcons from '../Styles/NavIcons';
import {colors} from '../theme/colors';
import {motion} from 'framer-motion';

const SignUp = ({joinUsClick, joinUs, signUpInClick, loginClick}) => {
  const variant = {
    'show': {
      display: 'flex',
      opacity: 1,
    },
    'hide': {
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
  };
  return (
    <div>
      <motion.div variants={variant}
        initial='hide'
        animate={joinUs ? 'show' : 'hide'}
        transition={{duration: 0.3}}
      className='fixed h-screen z-50 w-full top-0 left-0
      flex justify-center items-center'>
        <div className='w-full h-full absolute bg-black/30'
        onClick={joinUsClick}/>
        <div className='max-w-md w-full h-screen md:h-[80vh]
        relative z-10 md:rounded-md shadow-xl'
        style={{backgroundColor: colors.white}}>
          <button className='absolute right-5 top-5'
          onClick={joinUsClick}>
            <Icon name={'close'}/>
          </button>
          <div className='flex flex-col gap-4 justify-center items-center
            h-full py-10 overflow-y-auto'>
            <h2 className='font-bold text-4xl pb-8'
            style={{color: colors.seagreenPrimay}}>Welcome</h2>
            <Input name={'Username'} type={'text'} placeholder={'Username'}
             icon={<NavIcons name={'people'} color={colors.grayDark}/>}/>
            <Input name={'Email'} type={'email'} placeholder={'Email'}
             icon={<NavIcons name={'people'} color={colors.grayDark}/>}/>
            <Input name={'Password'} type={'password'} placeholder={'Password'}
             icon={<NavIcons name={'lock'} color={colors.grayDark}/>}/>
            <Input name={'Re-Password'} type={'password'}
             placeholder={'Re-Password'}
             icon={<NavIcons name={'lock'} color={colors.grayDark}/>}/>
            <PlainButton label={'SignUp'} className=' px-20 mt-8 '
            onClick={signUpInClick}/>
          </div>
          <div className='font-light text-xs pt-2 absolute
            bottom-5 left-0 right-0 mx-auto flex justify-center'>
            {'If you Already have an account'}
            <button style={{color: colors.seagreenPrimay}}
            className=' cursor-pointer'
            onClick={loginClick}>
              {', Login'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;

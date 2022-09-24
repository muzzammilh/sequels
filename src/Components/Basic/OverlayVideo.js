import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideOverlay} from '../../Redux/Actions/overlay';
import {motion} from 'framer-motion';

const OverlayVideo = () => {
  const {overlay, url} = useSelector((state) => state.overlay);
  console.log('OverlayVideo >>', overlay, url);
  const dispatch = useDispatch();
  const variants = {
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
      display: 'block',
    },
  };
  return (
    <motion.div variants={variants}
    initial="hidden"
    animate={overlay ? 'visible' : 'hidden'}
    className={`fixed z-[100] w-screen h-screen bg-black/80 top-0 left-0 `}
    onClick={()=>dispatch(hideOverlay())}>
      <div className='flex justify-center items-center h-full'>
        <iframe className='w-full h-[30vh] sm:h-[50vh]
        max-w-5xl md:h-[40rem] px-6'
        src={url}
        title="How to make a Movie Trailer App with ReactJs"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      </div>
    </motion.div>
  );
};

export default OverlayVideo;

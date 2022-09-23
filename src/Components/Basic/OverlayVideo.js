import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideOverlay} from '../../Redux/Actions/overlay';

const OverlayVideo = () => {
  const {overlay, url} = useSelector((state) => state.overlay);
  console.log('OverlayVideo >>', overlay, url);
  const dispatch = useDispatch();
  return (
    <div className={[`fixed z-[100] w-screen h-screen
    bg-black/60 top-0 left-0 `,
    overlay? ' block ' : ' hidden ']}
    onClick={()=>dispatch(hideOverlay())}>
      <div className='flex justify-center items-center text-white h-full'>
        <iframe className='w-full h-[30vh] sm:h-[50vh]
        max-w-5xl md:h-[40rem] px-6'
        src={url}
        title="How to make a Movie Trailer App with ReactJs"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default OverlayVideo;

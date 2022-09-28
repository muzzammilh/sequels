import React, {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {showOverlay} from '../../Redux/Actions/overlay';
import {DetailIcons} from '../../Styles/detailIcons';
import {colors} from '../../theme/colors';
import TabBar from '../NavBars/TabBar';

const Media = ({posters, backdrops, videos}) => {
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  const popularMemo = useMemo(() => {
    return [...(videos || []), ...(posters || []), ...(backdrops || [])];
  }, [posters, videos]);
  const tabsMap = {
    0: popularMemo,
    1: videos,
    2: backdrops,
    3: posters,
  };
  return (
    <div className='py-4'>
      <div>
        <h2 className='font-semibold text-2xl'>Media</h2>
      </div>
      <div className='mt-2'>
        <TabBar tabList={['Most Popular', 'Videos', 'Backdrops', 'Posters']}
          onClick={(index) => setTab(index)}
          className=' text-xs md:text-sm'/>
      </div>
      <div className='w-full relative'>
        <div className='flex overflow-x-auto gap-2 h-48 my-4'>
          {tabsMap[tab].length!=0 ? tabsMap[tab].map((item)=>{
            return <div key={item.id} className='relative'>
              {item.file_path?
                <div className='w-72 h-full overflow-hidden
                rounded-md relative'>
                  <img className='object-cover w-full h-full object-center'
                  src={process.env.REACT_APP_TMDB_IMAGE_URL +
                    '/w500' + item.file_path}/>
                </div> :
                <div className='w-72 h-full overflow-hidden
                rounded-md relative cursor-pointer'
                onClick={()=>{
                  dispatch(showOverlay('',
                  process.env.REACT_APP_YOUTUBE_LINK + item.key));
                }}>
                  <img className='object-cover w-full h-full object-center'
                  src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}/>

                <div className='w-full h-full flex absolute
                top-0 left-0 justify-center items-center opacity-60'>
                  <DetailIcons name={'play'} height={'4rem'}
                  color={colors.white}/>
                </div>
                </div>}
            </div>;
          }): <div className='w-full h-full flex
          justify-center items-center text-xs font-light'
          style={{color: colors.gray}}>No data</div>}
        </div>
        <div className='absolute h-full top-0 right-0 md:w-6
        bg-gradient-to-l from-white'/>
      </div>
    </div>
  );
};

export default Media;

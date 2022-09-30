import React from 'react';
import {Icon} from '../../Styles/icons';
import {useSelector} from 'react-redux';

const ExternalID = ({ids}) => {
  const {colors} = useSelector((state) => state.theme);
  return (
    <div className='flex gap-4 items-center'>
      <div className='flex gap-4 items-center'>
        {ids?.facebook_id && <a
        href={process.env.REACT_APP_FACEBOOK_LINK + ids.facebook_id}
          target='_blank' rel="noreferrer"><Icon name={'facebook'}
          color={colors.primary}/></a>}
        {ids?.twitter_id &&<a
          href={process.env.REACT_APP_TWITTER_LINK + ids.twitter_id}
          target='_blank' rel="noreferrer"><Icon name={'twitter'}
          color={colors.primary}/></a>}
        {ids?.instagram_id &&<a
          href={process.env.REACT_APP_INSTAGRAM_LINK + ids.instagram_id}
          target='_blank' rel="noreferrer"><Icon name={'instagram'}
          color={colors.primary}/></a>}
      </div>
      <div className='flex gap-4 items-center'>
        <div className='border-l pl-4'>
          <a href={`${process.env.REACT_APP_JUSTWATCH_LINK}`}
            target='_blank' rel="noreferrer"><Icon name={'justwatch'}
            color={colors.primary}/></a>
        </div>
        <div className='border-l pl-4'>
          <a href={`${process.env.REACT_APP_BBC_LINK}`}
            target='_blank' rel="noreferrer"><Icon name={'bbc'}
            color={colors.primary}/></a>
        </div>
      </div>
    </div>
  );
};

export default ExternalID;

import React from 'react';
import {Icon} from '../../Styles/icons';

const ExternalID = () => {
  return (
    <div className='flex gap-4 items-center'>
      <div className='flex gap-4 items-center'>
        <a href={`${process.env.REACT_APP_FACEBOOK_LINK}`}
          target='_blank' rel="noreferrer"><Icon name={'facebook'}/></a>
        <a href={`${process.env.REACT_APP_TWITTER_LINK}`}
          target='_blank' rel="noreferrer"><Icon name={'twitter'}/></a>
        <a href={`${process.env.REACT_APP_INSTAGRAM_LINK}`}
          target='_blank' rel="noreferrer"><Icon name={'instagram'}/></a>
      </div>
      <div className='flex gap-4 items-center'>
        <div className='border-l pl-4'>
          <a href={`${process.env.REACT_APP_JUSTWATCH_LINK}`}
            target='_blank' rel="noreferrer"><Icon name={'justwatch'}/></a>
        </div>
        <div className='border-l pl-4'>
          <a href={`${process.env.REACT_APP_BBC_LINK}`}
            target='_blank' rel="noreferrer"><Icon name={'bbc'}/></a>
        </div>
      </div>
    </div>
  );
};

export default ExternalID;

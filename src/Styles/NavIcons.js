
/* eslint-disable react/react-in-jsx-scope */

import {colors} from '../theme/colors';

const NavIcons = ({name, height, color, strokeWidth}) => {
  switch (name) {
    case 'home':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1
            0 001.414 1.414L4 10.414V17a1 1
            0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0
            011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1
            1 0 001.414-1.414l-7-7z" />
        </svg>
      );
    case 'movie':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2
            2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8
            8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5
            5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
          clipRule="evenodd" />
        </svg>
      );
    case 'tv-show':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2
            2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1
            1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      );
    case 'more':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8
            0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      );
    case 'add-movie':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000
            16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0
            102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      );
    case 'add-tv-show':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0
            002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2
            0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2
            0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0
            01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1
            1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
        </svg>
      );
    case 'setting':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532
            1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106
            2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561
            2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734
            2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561
            2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836
            2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379
            1.561-2.6 0-2.978a1.532 1.532 0
            01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532
            1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd" />
        </svg>
      );
    case 'notification':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004
            14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10
            18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      );
    case 'filter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} fill="none" viewBox="0 0 24 24" stroke={color || colors.primary} strokeWidth={strokeWidth || 2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2
            2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2
            2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      );
    case 'search':
      return (
        <svg height={height || '1.25rem'} viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.5" cy="11.5" r="11.5" fill={color || colors.primary}/>
          <line x1="13.1196" y1="14.0848" x2="23.0848" y2="24.8804"
            stroke={color || colors.primary} strokeWidth="3"
            strokeLinecap="round"/>
        </svg>
      );
    case 'user':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: height || '1.25rem'}} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0
            000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      );
    default:
      return <></>;
  }
};

export default NavIcons;

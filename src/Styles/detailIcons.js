/* eslint-disable react/react-in-jsx-scope */
import {colors} from '../theme/colors';

export const DetailIcons = ({name, height, color}) => {
  switch (name) {
    case 'star':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height || '1rem'} viewBox="0 0 20 20" fill={color || colors.primary}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1
                1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1
                1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54
                1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8
                2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
                1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1
                1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    case 'heart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height || '1rem'} viewBox="0 0 24 24" fill={color || colors.primary}>
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247
                15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688
                15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688
                3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0
                5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739
                9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247
                0 01-.383.219l-.022.012-.007.004-.003.001a.752.752
                0 01-.704 0l-.003-.001z" />
        </svg>


      );
    case 'bookmark':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height || '1rem'} viewBox="0 0 24 24" fill={color || colors.primary}>
          <path fillRule="evenodd" d="M6.32 2.577a49.255
              49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57
              2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165
              3.583A.75.75 0 013.75 21V5.507c0-1.47
              1.073-2.756 2.57-2.93z" clipRule="evenodd" />
        </svg>

      );
    case 'list':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height || '1rem'} viewBox="0 0 24 24" fill={color || colors.primary}>
          <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25
                0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25
                6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625
                12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5
                12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0
                017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125
                0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0
                010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>

      );
    case 'play':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height || '1rem'} viewBox="0 0 24 24" fill={color || colors.primary}>
          <path fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54
                6.348c1.295.712 1.295 2.573 0 3.285L7.28
                19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd" />
        </svg>


      );
    default:
      return;
  }
};


import React from 'react';
import {colors} from '../../theme/colors';

const Keywords = () => {
  return (
    <div>
      <div>
        <h2 className='font-semibold text-md'>Keywords</h2>
      </div>
      <div className="flex flex-wrap gap-2 py-4">
        {['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy',
          'Horror', 'Mystery', 'Thriller'].map((item, index) => {
        // eslint-disable-next-line react/jsx-key
          return <div className=" px-4 py-1 rounded-full
        text-sm text-gray-500"
          style={{
            color: colors.primary,
            backgroundColor: colors.primaryLight,
          }}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Keywords;

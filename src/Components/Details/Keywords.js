import React from 'react';
import {useSelector} from 'react-redux';

const Keywords = ({list}) => {
  const {colors} = useSelector((state) => state.theme);
  return (
    <div>
      <div>
        <h2 className='font-semibold text-md'>Keywords</h2>
      </div>
      <div className="flex flex-wrap gap-2 py-4">
        {list?.map((item) => {
          return <div className=" px-4 py-1 rounded-full
        text-sm text-gray-500" key={item.id}
          style={{
            color: colors.primary,
            backgroundColor: colors.primaryLight,
          }}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Keywords;

import React from 'react';

const Row = ({children, className}) => {
  return (
    <div className={[` flex justify-center items-center `, className]}>
      {children}
    </div>
  );
};

export default Row;

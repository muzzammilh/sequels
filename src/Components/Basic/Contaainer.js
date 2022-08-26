import React from 'react';

const Container = ({children, className}) => {
  return (
    <div className={[` container mx-auto
    flex justify-center items-center `, className]}>
      {children}
    </div>
  );
};

export default Container;

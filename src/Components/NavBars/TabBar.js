import React from 'react';
import {useSelector} from 'react-redux';

const TabBar = ({className, tabList, onClick, fontSize}) => {
  const {colors} = useSelector((state) => state.theme);
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div>
      <ul className='gap-6 md:gap-10 flex'>
        {tabList?.map((tab, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li>
              <button className={[' capitalize font-bold ',
                className]}
              style={{color: activeTab==index ? colors.primary :
                colors.grayDark, fontSize: fontSize}}
              onClick={() => {
                activeTab!=index && setActiveTab(index);
                onClick && onClick(index);
              }}>
                {tab}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabBar;

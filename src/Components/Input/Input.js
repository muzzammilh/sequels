import React from 'react';
import {colors} from '../../theme/colors';

const Input = ({className, placeholder, type, value, onChange,
    name, icon}) => {
    return (
        <div className='max-w-[18rem] w-full'>
            <div>
                <label className='font-light text-sm'
                style={{color: colors.gray}}>{name}</label>
            </div>
            <div className={[` w-full border h-10 rounded-md gap-2
             flex justify-center px-2 items-center `, className]}>
                <div>{icon}</div>
                <input className=' outline-none focus:outline-none
                w-full bg-transparent' type={type} placeholder={placeholder}
                value={value} onChange={onChange}/>
            </div>
        </div>
    );
};

export default Input;


import React, { useState } from 'react'
import { colors } from '../../theme/colors'

export default function DropDown({color,onClick,label,disabled,backgroundColor,borderRadius,borderColor,className,fontSize,fontStyle,fontWeight,height,width,dropDownList}) {
    const [showDropDown,setDropDown] = useState(false);
    return (
    <div className="relative inline-block text-left">
  <div>
  <button className={["dropdown btn btn-primary rounded-full px-6 h-10 border-[0.8px] ",className]} style={{backgroundColor, borderColor:borderColor || colors.primary,borderRadius,height,width}} disabled={disabled} onClick={()=>{
    setDropDown(true);
  }}><div style={{color: color || colors.primary,fontSize,fontStyle,fontWeight}}>{label}</div></button>

  </div>

  {showDropDown && <div className=" dropdown-menu origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1" role="none">
      {dropDownList&&dropDownList.map((item,index)=>{
        // eslint-disable-next-line react/jsx-key
        return <a href="#" className=" dropdown-item text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 " role="menuitem" tabIndex="-1" id="menu-item-0">{item}</a>
      })}
      
    </div>
  </div>}
</div>
  )
}

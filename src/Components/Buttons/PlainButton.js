import React from 'react'
import { colors } from '../../theme/colors'

export default function PlainButton({color,onClick,label,disabled,backgroundColor,borderRadius,className,fontSize,fontStyle,fontWeight,height,width}) {
  return (
    <div>
        <button className={["btn btn-primary bg-gray-200 rounded-full px-6 h-10 ",className]} style={{backgroundColor:backgroundColor || colors.primary,borderRadius,height,width}} disabled={disabled} onClick={onClick}><div style={{color: color || colors.white,fontSize,fontStyle,fontWeight}}>{label}</div></button>
    </div>
  )
}

import React from 'react'
import '../themes/Button.scss'
import Props from './button'

//#region 
// interface Props {
//     /**
//      * @description 状态类型
//      * @default default
//      */
//     type?:string;

//     /**
//      * 文本内容
//      * @default default
//      */
//     text:string;

//     /**
//      * 按钮大小
//      * @default default
//      */
//     size?:string

//     /**
//      * 是否启用禁止状态
//      * @default false
//      */
//     disable?:boolean

//     /**
//      * 是否为圆形按钮
//      * @default false
//      */
//     cicle?:boolean

// }
//#endregion


export default function Button({type,text,size,disable,handleClick}:Props) {
    let arr = [
        'fl-button',
        type?"fl-button--"+type:"fl-button-default",
        size?"fl-button--"+size:"",
        disable?"is-disable":""
      ]    
  return (
    <div>
      <button 
      className={arr.join(' ')} 
      onClick={handleClick}
      >{text}</button>
    </div>
  )
}

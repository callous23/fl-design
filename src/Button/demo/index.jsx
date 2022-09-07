import React from 'react';
import Button from '../index'

export default ()=> {
  return (
    <div style={{display:'flex',gap:'10px 10px',flexWrap:'wrap'}}>
      <Button type='success' text='成功' onClick={()=>alert(123)}></Button>
      <Button type='error' text='失败'></Button>
      <Button type='danger' text='警告'></Button>
      <Button type='info' text='默认'></Button>
    </div>
  )
}

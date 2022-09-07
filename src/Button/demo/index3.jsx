import React from 'react';
import Button from '../index'

export default ()=> {
  return (
    <div style={{display:'flex',gap:'10px 10px',flexWrap:'wrap'}}>
      <Button type='success' text='成功' disable={true}></Button>
      <Button type='error' text='失败' disable={true}></Button>
      <Button type='danger' text='警告' disable={true}></Button>
      <Button type='info' text='默认' disable={true}></Button>
    </div>
  )
}

import React from 'react';
import Button from '../index'

export default ()=> {
  return (
    <div style={{display:'flex',gap:'10px 10px',flexWrap:'wrap'}}>
      <Button type='success' text='默认'></Button>
      <Button type='success' text='中号' size='medium'></Button>
      <Button type='success' text='小号' size='small'></Button>
      <Button type='success' text='特小号' size='mini'></Button>
    </div>
  )
}

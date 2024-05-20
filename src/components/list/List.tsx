import React from 'react'
import './list.scss'
import { listData } from '../../lib/dummyData'
import Card from '../Card/Card'

const convertedListData = listData.map(item => ({
  ...item,
  id: item.id.toString()
}));

function List() {
  return (
    <div className='list'>
      {convertedListData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List
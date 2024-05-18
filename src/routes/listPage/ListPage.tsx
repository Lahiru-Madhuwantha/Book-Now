import React from 'react'
import './listPage.scss'
import { listData } from '../../lib/dummyData'
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';


function ListPage() {

  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        {/* <Map items={data}/> */}
      </div>
    </div>
  );
}

export default ListPage
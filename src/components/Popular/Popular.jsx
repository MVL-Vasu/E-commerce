import React from 'react';
import './Popular.css';
import products from '../data.js';
import Item from '../Item/Item';

const Popular = () => {
     return (
          <div className='popular'>
               <h1>POPULAR IN WOMEN</h1>
               <hr />
               <div className="popular-item">
                    {products.map( (item,i) => {
                         return <Item key={i} id={item.id} name={item.name} image={item.imgUrl} new_price={item.newPrice} old_price={item.oldPrice} />
                    })}
               </div>
          </div>
     );
}

export default Popular;

import React from 'react';
import './NewCollections.css';
import products from './products.json'; // Import the JSON file
import Item from '../Item/Item';

const NewCollections = () => {
     return (
          <div className='newcollections'>
               <h1>NEW COLLECTIONS</h1>
               <hr />
               <div className="collections">
                    {products.map((item, i) => {
                         return <Item key={i} id={item.id} name={item.name} image={item.imgUrl} new_price={item.newPrice} old_price={item.oldPrice} />
                    })}
               </div>
          </div>
     );
}

export default NewCollections;

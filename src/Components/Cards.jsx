import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ Products }) {
  return (
    <div>
      
      <div className="border text-center p-3 shadow pb-4">
        <Link to={`/viewProducts/${Products.id}`}>
          <img
            src={Products.thumbnail}
            
            className="img-fluid mb-2"
            style={{ height: '200px' }}
          />
        </Link>
        <h5 className="text-center text-dark mt-2">{Products.title}</h5>
        <h6>Price: {Products.price}rs</h6>
        <Link to={`/ViewProducts/${Products.id}`}>
               <button className='btn btn-primary'>Buy</button>
               </Link>
      </div>
    </div>
  );
}

export default Cards;

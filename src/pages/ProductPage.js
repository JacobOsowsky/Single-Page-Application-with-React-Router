import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product'

const ProductPage = (props) => {
    return (
        <div>
            <h3>Strona produktu</h3>
            <Product id={props.match.params.id}/>
            <Link to='/products'>Powrót do listy produktów</Link>
        </div>
      );
}
 
export default ProductPage;
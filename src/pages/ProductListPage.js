import React from 'react';
import {Link} from 'react-router-dom';

const products = ['car', 'bike', 'motorcykle']


const ProductListPage = () => {
    const productList = products.map(product=>(
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
            </li>
    ))
    return (
        <> 
            <h4>Nasze produkty:</h4>
            <ul>
                {productList}
            </ul>
        </>
     );
}
 
export default ProductListPage;
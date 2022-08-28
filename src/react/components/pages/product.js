import React from 'react';
import { ProductList } from '@comp/products/productList';

export const Product = () => {

    return (
        <div className='container'>
            
            <div className='filter'>
               
            </div>
            <div className='navigationText'>{`Hem > Produkter > HeadPhones`}</div>
            <ProductList />
        </div>
    )
}
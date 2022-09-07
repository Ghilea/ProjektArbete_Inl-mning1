import React from 'react';
import { Home } from '@comp/pages/home/Home';
import { Product } from '@comp/pages/product/Product';
import { Cart } from '@comp/pages/Cart';
import { Order } from '@comp/pages/Order';
import { Route, Routes } from 'react-router-dom';

export const Routing = () => {
    
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/product' element={ <Product /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/order' element={ <Order /> } />
        </Routes>
    )
    
}
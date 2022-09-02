import React from 'react';
import { Home } from '@comp/pages/home';
import { Product } from '@comp/pages/product';
import { Cart } from '@comp/pages/cart';
import { Order } from '@comp/pages/order';
import { Route, Routes } from 'react-router-dom';

export const Routing = () => {
    
    return (
        <Routes>
            <Route path={'/'} element={ <Home /> } />
            <Route path={'/product'} element={ <Product /> } />
            <Route path={'/cart'} element={ <Cart /> } />
            <Route path={'/order'} element={ <Order /> } />
        </Routes>
    )
    
}
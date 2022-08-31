import React from 'react';
import { Home } from '@comp/pages/home';
import { Product } from '@comp/pages/product';
import { Cart } from '@comp/pages/cart';
import { Order } from '@comp/pages/order';
import { Route, Routes } from 'react-router-dom';

export const Routing = () => {
    
    const tempPath = '/projektarbete/ProjektArbete_Inl-mning1/public/';

    return (
        <Routes>
            <Route path={tempPath} element={ <Home /> } />
            <Route path={tempPath+'product'} element={ <Product /> } />
            <Route path={tempPath+'cart'} element={ <Cart /> } />
            <Route path={tempPath+'cart'} element={ <Order /> } />
        </Routes>
    )
    
}
import React from 'react';
import { CartState } from '@comp/cart/cart_state';
import { CartShoping } from '@comp/cart/cart_shopingcart';
import { CartInformation } from '../cart/cart_information';

export const Cart = () => {

    return (
        <div className='container'>

            <CartState />
            <CartShoping />
            <CartInformation />

        </div>
    )
}
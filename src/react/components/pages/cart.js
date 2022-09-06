import React from 'react';
import { CartState } from '@comp/cart/cart_state';
import { CartShoping } from '@comp/cart/cart_shopingcart';
import { CartInformation } from '@comp/cart/cart_information';
import { CartShipment } from '@comp/cart/cart_shipment';
import { CartPayment } from '@comp/cart/cart_payment';
import { Link } from 'react-router-dom';

export const Cart = () => {

    return (
        <div className='container'>
            <CartState />
            <CartShoping />
            <CartInformation />
            <CartShipment />
            <CartPayment />
            <Link className='button' to='/order'>Slutför Köp</Link>
        </div>
    )
}
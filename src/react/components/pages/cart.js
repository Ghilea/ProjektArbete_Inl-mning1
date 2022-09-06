import React from 'react';
import { CartState } from '@comp/cart/cart_state';
import { CartShoping } from '@comp/cart/cart_shopingcart';
import { CartInformation } from '@comp/cart/cart_information';
import { CartShipment } from '@comp/cart/cart_shipment';
import { CartPayment } from '@comp/cart/cart_payment';
import { Button } from '@comp/button';

export const Cart = () => {

    return (
        <div className='container'>
            <CartState />
            <CartShoping />
            <CartInformation />
            <CartShipment />
            <CartPayment />
            <Button path='/order'>Slutför köp</Button>
        </div>
    )
}
import React from 'react';
import { CartState } from '@comp/cart/state/State';
import { CartShoping } from '@comp/cart/ShopingCart';
import { CartInformation } from '@comp/cart/information/Information';
import { CartShipment } from '@comp/cart/Shipment';
import { CartPayment } from '@comp/cart/Payment';
import { Button } from '@comp/custom/Button';

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
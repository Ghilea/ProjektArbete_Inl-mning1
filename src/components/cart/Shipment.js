import React from 'react';
import { CartShipmentData } from '@comp/Data';
import './Cart.scss';

export const CartShipment = () => {

    const box = CartShipmentData.map((item, index) => {
        return (
            <div className='cart_box' key={item.title+index}>
                <img src={item.image} alt='bild på fraktbolag'/>
                <div className='cart__text'>    
                    <h2 className='cart___title'>{item.title}</h2>
                    <p className='cart___subText'>{item.information}</p>
                </div>
            </div>
        )
    }) 

    return (
  
        <div className='cart'>
            <h2 className='cart_headTitle'>Fraktsätt</h2>
            {box}
        </div>

    )
}
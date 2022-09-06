import React from 'react';
import { CartPaymentData } from '@comp/data';

export const CartPayment = () => {

    const box = CartPaymentData.map((item, index) => {
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
            <h2 className='cart_headTitle'>Betalsätt</h2>
            {box}
        </div>

    )
}
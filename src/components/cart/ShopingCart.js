import React from 'react';
import img from '@/assets/images/headphones_audio_icon.svg';
import './Cart.scss';

export const CartShoping = () => {

    return (
  
        <div className='cart'>
            <h2 className='cart_headTitle'>Kundvagn</h2>
            
                <div className='cart_box'>
                    <img src={img} alt='bild på specifik hörlur'/>
                    <div className='cart__text'>    
                        <h2 className='cart___title'>Lorem</h2>
                        <p className='cart___subText'>Lorem Ipsum</p>
                    </div>
                    <p className='price'>5452 kr</p>
                    <p className='amount'>1x</p>
                </div>

            <div className='cart_sum'>Summa: 5452 kr exkl moms</div>

        </div>

    )
}
import React from 'react';
import { OrderShipmentData, OrderPaymentData, OrderData } from '@comp/data';
import { Button } from '@comp/custom/button';

export const Thanks = () => {

    const shipmentData = OrderShipmentData.map((item, index) => {
        return (
            <div className='orderBox' key={item.title+index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>         
        )
    })
    
    const paymentData = OrderPaymentData.map((item, index) => {
        return (
            <div className='orderBox' key={item.title+index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
        )
    })
    
    const orderData = OrderData.map((item, index) => {
        return (
           <div className={`orderBox ${index === 1 ? 'directionRow' : ''}`} key={item.title+index}>
                {index === 1 ? <p>620kr</p> : <h2>{item.title}</h2>}
                <p>{item.text}</p>
            </div>
        )
    })
    return (
  
        <div className='order'>
            <div className='orderHero'>Tack för din beställning</div>
            
            <div className='orderBoxContainer'>
                {shipmentData}
            </div>

            <div className='orderBoxContainer'>
                {paymentData}
            </div>

            <div className='orderBoxContainer'>
                {orderData}
            </div>

            <Button>Ändra beställning</Button>

        </div>

    )
}
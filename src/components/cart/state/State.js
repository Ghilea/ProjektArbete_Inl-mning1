import React from 'react';
import { CartStateData } from '@comp/Data';
import './State.scss';

export const CartState = () => {

    const box = CartStateData.map((item, index) => {
        return (
            <React.Fragment key={item.title+index}>
                <div className={`circle ${index === 0 ? 'babyBlue' : ''}`}>
                    <p className='product__title'>{item.title}</p>
                </div>
                {index < 4 ? <div className={`line ${index === 0 ? 'babyBlue' : ''}`}></div> : <></>}
            </React.Fragment> 
        )
    }) 

    return (
        <div className='stateContainer'>
            <div className='state'>
                {box}
            </div>
        </div>
    )
}
import React from 'react';
import { productListData } from '@comp/data';

export const ProductList = () => {

    const box = productListData.map((item, index) => {
        return (
            <div className='productListBox' key={item.title+index}>
                <img src='./assets/images/headphones_audio_icon.svg' alt='bild på specifik hörlur'/>
                <div className='productListText'>    
                    <h2 className='productListTitle'>{item.title}</h2>
                    <p className='productListSubText'>{item.subText}</p>
                    <span className='productListTag'>{item.tag}</span>
                </div>
                <p className='price'>{item.price+' kr'}</p>
                <button type='button'>Köp</button>
            </div>
        )
    }) 

    return (
        <div className='productList'>
            {box}
        </div> 
    )
}
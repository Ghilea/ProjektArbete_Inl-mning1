import React from 'react';

export const ProductList = () => {

    return (
        <div className='productList'>
            <div className='productList_box'>
                <img src='./assets/images/headphones_audio_icon.svg' alt='bild på specifik hörlur'/>
                <div className='productList__text'>    
                    <h2 className='productList___title'>Hörlurar</h2>
                    <p className='productList___subText'>SubText</p>
                </div>
            </div>
        </div> 
    )
}
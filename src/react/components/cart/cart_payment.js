import React from 'react';

export const CartPayment = () => {

    const boxLoop = [
        {
            title: 'Swish',
            image: './assets/images/headphones_audio_icon.svg',
            information: ''
        },
        {
            title: 'Faktura',
            image: './assets/images/headphones_audio_icon.svg',
            information: ''
        },
        {
            title: 'Bankbetalning',
            image: './assets/images/headphones_audio_icon.svg',
            information: ''
        },
        {
            title: 'Kreditkort',
            image: './assets/images/headphones_audio_icon.svg',
            information: ''
        }
        
    ]

    const box = boxLoop.map((item, index) => {
        return (
            <div className='cartShipment_box' key={item.title+index}>
                <img src={item.image} alt='bild på fraktbolag'/>
                <div className='cartShipment__text'>    
                    <h2 className='cartShipment___title'>{item.title}</h2>
                    <p className='cartShipment___subText'>{item.information}</p>
                </div>
            </div>
        )
    }) 

    return (
  
        <div className='cartShipment'>
            <h2 className='cartShipment_headTitle'>Betalsätt</h2>
            {box}
        </div>

    )
}
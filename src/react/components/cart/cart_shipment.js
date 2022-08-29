import React from 'react';

export const CartShipment = () => {

    const boxLoop = [
        {
            title: 'Postnord',
            image: './assets/images/headphones_audio_icon.svg',
            information: 'Kan levereras som Varubrev, Ombud, Hemleverans (dag/kväll) eller Paketskåp'
        },
        {
            title: 'Instabox',
            image: './assets/images/headphones_audio_icon.svg',
            information: 'Kan levereras som Hemleverans (kväll) eller Paketskåp'
        },
        {
            title: 'DHL',
            image: './assets/images/headphones_audio_icon.svg',
            information: 'Kan levereras som Ombud'
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
            <h2 className='cartShipment_headTitle'>Fraktsätt</h2>
            {box}
        </div>

    )
}
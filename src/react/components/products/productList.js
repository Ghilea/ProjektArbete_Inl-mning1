import React from 'react';

export const ProductList = () => {

    const boxLoop = [
        {
            title: 'Hörlurar',
            subText: 'Lorem ipsum',
            tag: 'Hansfree | Trådlös',
            price: 329
        },
        {
            title: 'AirPod',
            subText: 'Lorem ipsum',
            tag: 'Hansfree | Trådlös',
            price: 1229
        },
        {
            title: 'Hörlurar',
            subText: 'Lorem ipsum',
            tag: 'Hansfree | Trådlös',
            price: 329
        },
        {
            title: 'Hörlurar',
            subText: 'Lorem ipsum',
            tag: 'Hansfree | Trådlös',
            price: 329
        },
        {
            title: 'Hörlurar',
            subText: 'Lorem ipsum',
            tag: 'Hansfree | Trådlös',
            price: 329
        }
    ]

    const box = boxLoop.map((item, index) => {
        return (
            <div className='productList_box' key={item.title+index}>
                <img src='./assets/images/headphones_audio_icon.svg' alt='bild på specifik hörlur'/>
                <div className='productList__text'>    
                    <h2 className='productList___title'>{item.title}</h2>
                    <p className='productList___subText'>{item.subText}</p>
                    <p className='productList___tag'>{item.tag}</p>
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
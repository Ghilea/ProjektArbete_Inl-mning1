import React from 'react';
import { ProductList } from '@comp/products/productList';

export const Cart = () => {

    const boxLoop = [
        {
            title: 'Handsfree'
        },
        {
            title: 'In-Ear',
        },
        {
            title: 'On-Ear',
        },
        {
            title: 'Over-Ear',
        },
        {
            title: 'Brusreducering',
        },
        {
            title: 'Trådlös',
        },
        {
            title: 'Mikrofon',
        }
    ]

    const box = boxLoop.map((item, index) => {
        return (
            <div className='product_box' key={item.title+index}>
                <img src='./assets/images/headphones_audio_icon.svg' alt='bild på specifik hörlur'/>
                <p className='product__title'>{item.title}</p>
            </div>
        )
    }) 

    return (
        <div className='container'>

            <div className='filter_container'>
                <h2 className='filter_title'>Filter</h2>
                <div className='filter'>
                    {box}
                </div>
            </div>

            <div className='navigationText'>{`Hem > Produkter > HeadPhones`}</div>
            <ProductList />
        </div>
    )
}
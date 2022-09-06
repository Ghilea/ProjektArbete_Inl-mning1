import React from 'react';
import { Link } from 'react-router-dom';
import { ProductList } from '@comp/products/productList';
import { ProductData } from '@comp/data';

export const Product = () => {

    const box = ProductData.map((item, index) => {
        return (
            <div className='button' key={item.title+index}>
                <img src='./assets/images/headphones_audio_icon.svg' alt='bild på hörlur'/>
                <h3>{item.title}</h3>
            </div>
        )
    }) 

    return (
        <div className='container'>

            <div className='filterContainer'>
                <h2>Filter</h2>
                <div className='filterBox'>
                    {box}
                </div>
            </div>

            <div className='navigationText'>
                <Link className='link' to='/' onClick={()=> changePath('home')}>Hem</Link> &gt; 
                Produkter &gt;
                HeadPhones
            </div>

            <ProductList />
        </div>
    )
}
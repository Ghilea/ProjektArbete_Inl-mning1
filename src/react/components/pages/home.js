import React from 'react';
import { ProductList } from '@comp/products/productList';

export const Home = () => {

    return (
        <>
            <div className='container'>
                <div className='hero'>
                    <div className='hero_text'>
                        <h1 className='hero__title'>Hörlurar 2022</h1>
                        <p className='hero__subTitle'>Oavsett om du vill ha fräcka AirPods eller stora Over-Ear hörlurar har vi det som passar dig.</p>
                    </div>
                </div>
                
                <ProductList />
            </div>
            

        </>
    )
}
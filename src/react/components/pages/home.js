import React from 'react';
import { ProductList } from '@comp/products/productList';
import { HomeHeroData } from '@comp/data';

export const Home = () => {

    const data = HomeHeroData.map((item, index) => {
        return (
            <React.Fragment key={item.title + index}>
                <h1>{item.title}</h1>
                <p>{item.subTitle}</p>
            </React.Fragment>
        )
    })

    return (
        <>
            <div className='container'>
                <div className='hero'>
                    <div className='heroBox'>
                        {data}
                    </div>
                </div>
                
                <ProductList />
            </div>
        </>
    )
}
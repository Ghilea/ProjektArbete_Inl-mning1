import React from 'react';
import { ProductList } from '@comp/products/ProductList';
import { HomeHeroData } from '@comp/Data';
import { Button } from '@comp/custom/Button';
import './Home.scss';

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
        <div className='container'>
            <div className='hero'>
                <div className='heroBox'>
                    {data}
                    <Button>Erbjudande</Button>
                </div>
            </div>
            
            <ProductList />
        </div>
    )
}
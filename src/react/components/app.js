import React from 'react';
import { Basic } from '@comp/store';
import { Header } from '@comp/header/header';
import { Hero } from '@comp/hero/hero';

export const App = () => {

    const store = Basic(state => state);

    return (
        <>  
           <Header />
           <Hero />
        </>        
    )
}
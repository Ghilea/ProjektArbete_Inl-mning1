import React from 'react';
import { Basic } from '@comp/store';
import { Header } from '@comp/header/header';
import { Routing } from '@comp/routing';

export const App = () => {

    const store = Basic(state => state);

    return (
        <>  
            <Routing />
            <Header />
        </>        
    )
}
import React from 'react';
import { Logo } from '@comp/header/logo';
import { NavBar } from '@comp/header/navBar';
import { Basic } from '@comp/store';

export const Header = () => {

    const store = Basic(state => state);

    return (
        <div className={`header ${store.path !== 'home' ? 'navBackground' : ''}`}>
            <Logo />
            <NavBar />
        </div>      
    )
}
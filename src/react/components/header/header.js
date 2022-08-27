import React from 'react';
import { Logo } from '@comp/header/logo';
import { NavBar } from '@comp/header/navBar';

export const Header = () => {

    return (
        <div className='header'>
            <Logo />
            <NavBar />
        </div>      
    )
}
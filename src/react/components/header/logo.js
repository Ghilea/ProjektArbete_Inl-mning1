import React from 'react';
import { Link } from 'react-router-dom';
import { Basic } from '@comp/store';

export const Logo = () => {

    return (
        <Link className='item' to='/' onClick={()=> changePath('home')}>
            <div className='logo'>
                <img src='./assets/images/logo.svg' alt="Bild på loga"/>
                <p className='logo_text'>Truth Headphones</p>
            </div>   
        </Link>
           
    )
}
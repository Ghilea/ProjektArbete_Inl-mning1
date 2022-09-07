import React from 'react';
import { Link } from 'react-router-dom';
import { Basic } from '@/store';
import logo from '@/assets/images/logo.svg';
import './Logo.scss';

export const Logo = () => {

    const store = Basic(state => state);

    const changePath = (value) => {
        store.changePath(value)
    }
    
    return (
        <Link className='item' to='/' onClick={()=> changePath('home')}>
            <div className='logo'>
                <img src={logo} alt="Bild på loga"/>
                <p className='logo_text'>Truth Headphones</p>
            </div>   
        </Link>
    )
}
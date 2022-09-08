import React, { useState } from 'react';
import { Logo } from '@comp/header/logo/Logo';
import { NavBar } from '@comp/header/navbar/Navbar';
import './Header.scss';

export const Header = () => {

    //navbg on scroll
    const [navBg, setNavbg] = useState(false);

    const onScroll = (e) => {
        if (window.scrollY >= 50) {
            setNavbg(true);
        } else {
            setNavbg(false)
        }
    }

    window.addEventListener('scroll', onScroll)

    return (
        <div className={navBg ? 'header headerBg' : 'header'}>
            <Logo />
            <NavBar />
        </div>      
    )
}
import React, { useState } from 'react';
import { Logo } from '@comp/header/logo';
import { NavBar } from '@comp/header/navBar';

export const Header = () => {

    //navbg on scroll
    const [navBg, setNavbg] = useState(false);

    const onScroll = (e) => {
        console.log(navBg);
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
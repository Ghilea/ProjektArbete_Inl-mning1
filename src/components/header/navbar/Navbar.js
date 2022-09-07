import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Basic } from '@/store';
import searchImg from '@/assets/images/search_zoom_icon.svg';
import shopingImg from '@/assets/images/cart_shopping_icon.svg';
import './Navbar.scss';

export const NavBar = () => {

    const store = Basic(state => state);
    
    //menuClick
    const reducer = (state, action) => {
        switch (action.type) {
            case true:
                return {
                    display: state.display = false
                }
            break;
            case false:
                return {
                    display: state.display = true
                }
            break;
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {display: false})
    
    const openPhoneMenu = (e) => {
        dispatch({type: state.display})
    }

    //set store for later use
    const changePath = (value) => {
        store.changePath(value)   
    }

    return (
        <nav className='mainMenu'>

            <div className='left desktopMenu'>
                <Link className='item' to='/' onClick={()=> changePath('home')}>Hem</Link>
                <Link className='item' to='/product' onClick={ () => changePath('product')}>Produkter</Link>
            </div>

            <div className={'left phoneMenu'} onClick={openPhoneMenu}>
                <div className={`phoneMenuBox ${state.display ? 'display' : ''}`}>
                    <Link className='item' to='/' onClick={() => changePath('home')}>Hem</Link>
                    <Link className='item' to='/product' onClick={() => changePath('product')}>Produkter</Link>
                </div>
            </div>
            
            <div className='right'>
                <Link className='item' to='/' onClick={()=> changePath('home')}>
                    <img src={searchImg} alt='bild på ett förstoringsglas'/>
                </Link> 
                <Link className='item' to='/cart' onClick={() => changePath('cart')}>
                    <img src={shopingImg} alt='bild på en shoppingvagn'/>
                </Link>
            </div>
        
        </nav> 
    )
}
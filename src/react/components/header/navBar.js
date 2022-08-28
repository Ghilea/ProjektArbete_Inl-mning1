import React, { useReducer} from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

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

    const tempPath = '/projektarbete/ProjektArbete_Inl-mning1/public/';

    return (
        <nav>

            <div className='left desktopMenu'>
                <Link className='item' to={tempPath}>Hem</Link>
                <Link className='item' to={tempPath+'product'}>Produkter</Link>
            </div>

            <div className='left phoneMenu' onClick={openPhoneMenu}>
                <div className={`phoneMenuBox ${state.display ? 'display' : ''}`}>
                    <Link className='item' to={tempPath}>Hem</Link>
                    <Link className='item' to={tempPath+'product'}>Produkter</Link>
                </div>
                
            </div>
            
            <div className='right'>
                    <a className='item' href="#"><img src='./assets/images/search_zoom_icon.svg' alt='bild på ett förstoringsglas'/></a> 
                    <a className='item' href="#"><img src='./assets/images/cart_shopping_icon.svg' alt='bild på en shoppingvagn'/></a>
            </div>
        
        </nav> 
    )
}
import React from 'react';

export const NavBar = () => {

    return (
        <div className='navbar'>
           <div className='left'>
                <a href="#">Hem</a>
                <a href="#">Produkter</a>
           </div>
           
           <div className='right'>
                <a href="#"><img src='./assets/images/search_zoom_icon.svg' alt='bild på ett förstoringsglas'/></a> 
                <a href="#"><img src='./assets/images/cart_shopping_icon.svg' alt='bild på en shoppingvagn'/></a>
           </div>
           
          
        </div>      
    )
}
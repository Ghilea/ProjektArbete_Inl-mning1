import React from 'react';

export const CartInformation = () => {

    return (
  
        <div className='cInformation'>
            <h2 className='cart_headTitle'>Uppgifter</h2>
            
            <div className='cInformation_login'>Logga in</div>

            <form className='form'>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" placeholder='Dennis' />
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" placeholder='Karlsson' />
            </form>

            <div className='cInformation_choose'>Privatperson | Företag</div>

        </div>

    )
}
import React from 'react';

export const CartInformation = () => {

    return (
  
        <div className='cInformation'>
            <h2 className='cInformation_headTitle'>Uppgifter</h2>
            
            <div className='cInformation_login'>Logga in</div>

            <form className='form'>
                <div className='form_box'>
                    <input type="text" placeholder='Förnamn' />
                    <input type="text" placeholder='Adress' />
                    <input type="text" placeholder='E-post' />
                </div>
                <div className='form_box'>
                    <input type="text" placeholder='Efternamn' />
                    <input type="text" placeholder='Mobilnummer' />
                </div>
            </form>

            <div className='cInformation_choose'>Privatperson | Företag</div>

        </div>

    )
}
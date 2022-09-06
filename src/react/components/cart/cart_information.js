import React from 'react';
import { Input } from '@comp/custom/input';

export const CartInformation = () => {

    return (
  
        <div className='cInformation'>
            <h2 className='cInformation_headTitle'>Uppgifter</h2>
            
            <div className='cInformation_login'>Logga in</div>

            <form className='form'>
                <div className='form_box'>
                    <Input>Förnamn</Input>
                    <Input>Adress</Input>
                    <Input>E-post</Input>
                </div>
                <div className='form_box'>
                    <Input>Efternamn</Input>
                    <Input>Mobilnummer</Input>
                </div>
            </form>

            <div className='cInformation_choose'>Privatperson | Företag</div>

        </div>

    )
}
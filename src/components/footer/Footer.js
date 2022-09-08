import React from 'react';
import { FooterData1, FooterData2, FooterData3, FooterData4 } from '@/data';

import './Footer.scss';

export const Footer = () => {
    
    const data1 = FooterData1.map((item, index) => {
        return (
            <li key={item+index}>{item.title}</li>
        )
    })

    const data2 = FooterData2.map((item, index) => {
        return ( 
            <li key={item+index}>{item.title}</li>
        )
    })

    const data3 = FooterData3.map((item, index) => {
        return ( 
            <li key={item+index}>{item.title}</li>
        )
    })

    const data4 = FooterData4.map((item, index) => {
        return ( 
            <li key={item+index}>{item.title}</li>
        )
    })

    return (
        <div className='footerContainer'>
            
            <div className='footerLinks'>
                <div className='footerBox'>
                    <h3>
                        Handla och läs mer
                    </h3>
                    <ul>
                       {data1}
                    </ul>
                </div>
                

                <div className='footerBox'>
                    <h3>
                        För företag
                    </h3>
                    <ul>
                        {data2}
                    </ul>
                    <h3 className='mt1'>
                        För utbildning
                    </h3>
                    <ul>
                        {data3}
                    </ul>
                </div>

                <div className='footerBox'>
                    <h3>
                        Om Truth Headphones
                    </h3>
                    <ul>
                        {data4}
                    </ul>
                </div>
            </div>

            <div className='footerText'>
                <p className='copyright'>
                    Copyright &copy; 2022 Truth Headphones. Alla rättigheter förbihålls.
                </p>
                <div className='subLinks'>
                    
                    <p>
                        Integritetspolicy
                    </p>
                    |
                    <p>
                        Användning av cookies
                    </p>
                    |
                    <p>
                        Användningsvillkor
                    </p>
                    |
                    <p>
                        Försäljning och återbetalning
                    </p>
                    |
                    <p>
                        Juridisk information
                    </p>
                    |
                    <p>
                        Sajtkarta
                    </p>

                </div>
            </div>
        </div>
    )
}
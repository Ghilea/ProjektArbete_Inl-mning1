import React from 'react';

export const CartState = () => {

    const boxLoop = [
        {
            title: 'Kundvagn'
        },
        {
            title: 'Uppgifter',
        },
        {
            title: 'Fraktsätt',
        },
        {
            title: 'Betalsätt',
        },
        {
            title: 'Slutför',
        }
    ]

    const box = boxLoop.map((item, index) => {
        return (
            <React.Fragment key={item.title+index}>
                <div className='circle'>
                    <p className='product__title'>{item.title}</p>
                </div>
                {index < 4 ? <div className='line'></div> : <></>}
            </React.Fragment> 
        )
    }) 

    return (
        <div className='state'>
            {box}
        </div>
    )
}
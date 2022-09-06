import React from 'react';

export const Input = ({children, type}) => {

    return (
        <input type={(type === undefined) ? 'text' : type} placeholder={children} />
    )
}
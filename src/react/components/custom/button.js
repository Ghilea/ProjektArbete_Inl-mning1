import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({children, path}) => {

    return (
        <div className='buttonContainer'>
            <Link className='button' to={(path === undefined) ? '/' : path}>{children}</Link>
        </div>
    )
}
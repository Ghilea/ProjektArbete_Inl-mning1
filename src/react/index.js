import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@comp/app';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '@comp/routing';

const container = document.querySelector('main');
const root = createRoot(container);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routing />
            <App />
        </BrowserRouter> 
    </StrictMode>
);
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@comp/app/App';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '@comp/Routing';

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
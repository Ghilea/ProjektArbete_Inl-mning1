import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@comp/app';
import { BrowserRouter } from 'react-router-dom';

const container = document.querySelector('main');
const root = createRoot(container);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </StrictMode>
);
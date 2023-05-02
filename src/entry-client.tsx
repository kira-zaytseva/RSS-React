import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/routes';

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
console.log('hydrated');

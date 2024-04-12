import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css'; // Assuming you have a CSS file for styling

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <>
      <h1>hello</h1>
      <App />
    </>
  </StrictMode>
);

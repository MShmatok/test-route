import React from 'react';
import ReactDOM from 'react-dom/client';
import { CMS } from 'components/CMS';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import tabsList from './components/tabs.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-route" >
      <CMS tabsList={tabsList} />
    </BrowserRouter>
  </React.StrictMode>
);

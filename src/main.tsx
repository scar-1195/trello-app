import React from 'react';
import ReactDOM from 'react-dom/client';
import { TrelloApp } from './TrelloApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TrelloApp />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClienntPRovider} from 'react-query'
import App from './App';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClienntPRovider client={client}>

    <App />
  </QueryClienntPRovider>

)
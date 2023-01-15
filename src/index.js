import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InsideCartProvider from './store/InsideCartProvider';
import OrderProcessProvider from './store/OrderProcessProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InsideCartProvider>
      <OrderProcessProvider>
        <App />
      </OrderProcessProvider>
    </InsideCartProvider>
  </React.StrictMode>
);

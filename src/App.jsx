import style from './App.module.css';
import React, { useContext } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import OrderPage from './components/order-form/OrderPage';
import OrderProcess from './store/OrderProcess';
import ThankYou from './components/thank-you/ThankYou';
function App() {
  const { order, thankYou } = useContext(OrderProcess);
  let content = (<><Header /> <Main /></>)
  if (order && !thankYou) {
    content = <OrderPage />
  }
  if (!order && thankYou) {
    content = <ThankYou />
  }
  return (
    <div className={style.App}>
      {content}
    </div>
  );
}

export default App;
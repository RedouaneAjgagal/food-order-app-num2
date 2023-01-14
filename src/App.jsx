import style from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import OrderPage from './components/order-form/OrderPage';
import InsideCart from './store/InsideCart';
import React, { useContext } from 'react';
function App() {
  const { order } = useContext(InsideCart);
  let content = (<><Header /> <Main /></>)
    if (order) {
      content = <OrderPage />
    }
  return (
    <div className={style.App}>
      {content}
    </div>
  );
}

export default App;
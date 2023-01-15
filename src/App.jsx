import style from './App.module.css';
import React, { useContext } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import OrderPage from './components/order-form/OrderPage';
import InsideCart from './store/InsideCart';
function App() {
  let content = (<><Header /> <Main /></>)
  const { order } = useContext(InsideCart);

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
import style from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import OrderPage from './components/order-form/OrderPage';
function App() {
  return (
    <div className={style.App}>
      {/* <Header />
      <Main /> */}
      <OrderPage />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './router/home/Home';
import Cart from './router/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Product from './router/product/Product';
import Detail from './router/detail/Detail';

function App() {
  const [count, setCount] = useState(0);

  const AppLayout = () => (
    <Layout>
      <Outlet />
    </Layout>
  );

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product/>} />
          <Route path="/product/:id" element={<Detail/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



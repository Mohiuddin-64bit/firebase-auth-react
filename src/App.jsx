import React from 'react';
import Home from './component/Home';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
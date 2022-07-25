import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
}

export default MainLayout;

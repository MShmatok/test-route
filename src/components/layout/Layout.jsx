import Header from 'components/header/Header';
import React from 'react';

import { Outlet } from 'react-router-dom';

const Layout = ({ tabsList }) => {
  return (
    <>
      <Header tabsList={tabsList} />
      <Outlet />
    </>
  );
};

export default Layout;

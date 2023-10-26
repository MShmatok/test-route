import { Navigate } from 'react-router-dom';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

import { GlobalStyle } from './GlobalStyled';
import TabContent from './TabContent';

const CMS = ({ tabsList }) => {
  tabsList.sort((a, b) => a.order - b.order);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout tabsList={tabsList} />}>
          {tabsList.map(tab => {
            if (tab.order === 0) {
              return (
                <Route
                  key={tab.id}
                  index
                  element={<TabContent path={tab.path} />}
                />
              );
            }
            return (
              <Route
                path={tab.id}
                key={tab.id}
                element={<TabContent path={tab.path} />}
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export { CMS };

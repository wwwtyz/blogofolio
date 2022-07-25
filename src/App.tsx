import React from 'react';

import { AppThemeProvider } from 'components/AppThemeProvider/AppThemeProvider';
import PostList from 'components/PostCard/PostList';
import RegistrationPage from 'pages/Authorization/RegistrationPage';
import AutorizationPage from 'pages/Authorization/AutorizationPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from 'enums/router';
import MainLayout from 'layout/MainLayout';

function App() {
  return (
    <AppThemeProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainLayout />}
        >
          <Route
            index
            element={<PostList post={[]} />}
          />
          <Route
            path={AppRoute.Login}
            element={<AutorizationPage />}
          />
          <Route
            path={AppRoute.Register}
            element={<RegistrationPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<div>Not found</div>}
          />
        </Route>
        <Route
          path="*"
          element={
            <Navigate
              to={AppRoute.NotFound}
              replace
            />
          }
        />
      </Routes>
    </AppThemeProvider>
  );
}

export default App;

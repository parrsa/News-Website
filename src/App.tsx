import React from 'react';
import './App.css';
import { ListRoute } from './@types/components/App/routes.types';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from './assets/theme/theme';
import { ThemeProvider } from '@mui/material';
import { navList } from './Routes';
import Layout from './components/layout';

function App() {
  const GetRoutes = (AllRoute: ListRoute[]): any => (
    <React.Fragment>
      {AllRoute.map((route, index) => {
        if (route.path) {
          return (
            <Route key={index} path={route.path} element={<>{route.component}</>} />
          )
        }
        return null
      })}
    </React.Fragment>
  )
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <>
          <Layout>
            <Routes>
              {GetRoutes(navList)}
            </Routes>
          </Layout>
        </>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

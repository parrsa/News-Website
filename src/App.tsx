import React from 'react';
import './App.css';
import { ListRoute } from './@types/components/App/routes.types';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from './assets/theme/theme';
import { ThemeProvider } from '@mui/material';
import { navList } from './Routes';

function App() {
  const GetRoutes = (AllRoute: ListRoute[]): any => (
    <React.Fragment>
      {AllRoute.map((route) => {
        if (route.path) {
          return (
            <Route key={route.key} path={route.path} element={<>{route.component}</>} />
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
          <>
            <Routes>
              {GetRoutes(navList)}
            </Routes>
          </>
        </>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

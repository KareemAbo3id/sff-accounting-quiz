import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: 'Cairo',
  },
  palette: {
    primary: {
      main: '#dba903',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <div dir="rtl" style={{ backgroundColor: '#f8f9fb', minHeight: '100vh' }}>
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

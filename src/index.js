import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './extendTheme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);



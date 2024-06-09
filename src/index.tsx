import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { HashRouter } from 'react-router-dom';
import App from './App'; // Importing App without curly braces
import './index.css';
import './i18n'; // Import i18n configuration

import i18n from './i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <ColorModeScript />
        <App />
      </HashRouter>
    </I18nextProvider>
  </React.StrictMode>,
  rootElement
);

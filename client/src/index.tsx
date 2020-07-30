import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'containers/AppContainer';
import { App } from 'components/App';

import './index.css';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

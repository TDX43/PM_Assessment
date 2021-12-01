import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { StudentContextProvider } from './context/StudentContext'

ReactDOM.render(
  <React.StrictMode>
    <StudentContextProvider>
      <App />
    </StudentContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


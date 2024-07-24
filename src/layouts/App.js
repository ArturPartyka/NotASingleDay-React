import React from 'react';


import Page from './Page';
import Header from './Header';

import AppProvider from '../AppProvider';


import '../styles/App.css';

function App() {
  return (
    <div className='App'>

      <AppProvider>
        <Header />
        <Page />
      </AppProvider>

    </div>
  );
}

export default App;

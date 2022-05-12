import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { store } from '@/store';
import App from '@/App';
import TestPage from '@/pages/test';
import TestTestPage from '@/pages/testtest';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/test/test' element={<TestTestPage />} />
      </Routes>
    </HashRouter>
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from './utils/router/router';
import { Provider } from "react-redux";
import { store } from './utils/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
    </PersistGate>
  </Provider>
);

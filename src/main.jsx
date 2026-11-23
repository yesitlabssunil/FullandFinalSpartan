// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
// import './index.css'
import "./assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
// ========== SHIVM NEW CHANGES START ==========
// Bootstrap JS is loaded as a deferred local script in index.html to reduce initial bundle size.
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ========== SHIVM NEW CHANGES END ==========
import App from "./App.jsx";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
        <ToastContainer
          position="top-right"
          containerStyle={{ zIndex: 999999 }}
        />
      </Provider>
    </HelmetProvider>
  // </React.StrictMode>
);

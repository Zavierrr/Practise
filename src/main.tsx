import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/font/iconfont.css";
import "../public/adapter";
import "./assets/styles/reset.css";
import { Provider } from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

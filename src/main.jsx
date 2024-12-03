import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

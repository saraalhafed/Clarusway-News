import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store.js";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
    <CssBaseline />
    <App />
    </Provider>
  </BrowserRouter>
);
/* cssbaseline is a components that removes the default padding and the margin in material */
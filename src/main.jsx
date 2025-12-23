import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter is a router implementation that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

import App from "./App.jsx";
import 'antd/dist/antd.css'; // this will import the default Ant Design styles for the application
// it includes styles for buttons, forms, layouts, and other UI components provided by Ant Design.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

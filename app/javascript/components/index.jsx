// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";

// document.addEventListener("turbo:load", () => {
//   const root = createRoot(
//     document.body.appendChild(document.createElement("div"))
//   );
//   root.render(<App />);
// });

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Todos from '../components/Todos';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Todos />,
    document.body.appendChild(document.createElement('div')),
  )
})
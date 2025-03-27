// const heading=React.createElement("h1",{id:"heading"},"Hello From React!");;

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

import React from "react";
import ReactDOM from "react-dom/client";

// React Element 

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// JSX is a syntax extension for JavaScript, it allows us to write HTML in JavaScript files. It
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

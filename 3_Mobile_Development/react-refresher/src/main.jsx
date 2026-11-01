import React from "react";
import { createRoot } from 'react-dom/client'

// const h1 = React.createElement("h1", null, "Hello World!")

let name = "Prince"
createRoot(document.getElementById('root')).render(
  <div>
  <h1 className="title" id="heading">
    Welcome to Mobile Dev! {name}
  </h1>
  <App />
  </div>
);

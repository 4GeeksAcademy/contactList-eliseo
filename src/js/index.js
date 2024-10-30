//import react into the bundle
import React from 'react';
import { createRoot } from 'react-dom/client';

//include your index.css file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js';

// Create root
const root = createRoot(document.querySelector("#app"));

// Render your react application
root.render(<Layout />);

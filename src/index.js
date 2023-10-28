import ReactDom from "react-dom/client"
import App from  './app';
import React from 'react';
import 'react-icons'
import './index.css'

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<App/>);
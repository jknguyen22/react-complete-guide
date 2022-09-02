// index.js is the first file to execute

// we're importing react-dom from package.json
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// createRoot creates the user interface for the user, leads us to the public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// <App /> is a component using jsx syntax
// it will render in the place of root's div
root.render(<App />);

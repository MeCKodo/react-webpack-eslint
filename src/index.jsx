import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/component.jsx';
import App from './components/app.jsx';

if (process.env.NODE_ENV !== 'production') {
	console.log('fuck');
}
ReactDOM.render(<App />, document.getElementById('container'));

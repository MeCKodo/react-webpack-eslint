import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/component.jsx';

console.log(React);
console.log(ReactDOM);

if (process.env.NODE_ENV !== 'production') {
	console.log('fuck');
}
ReactDOM.render(<Hello />, document.getElementById('container'));

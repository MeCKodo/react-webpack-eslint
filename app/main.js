import React from 'react';
import {render} from 'react-dom';
import Hello from './component.jsx';


function main() {
    render(<Hello />, document.getElementById('container'));
}

main();
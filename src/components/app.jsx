import React, { Component } from 'react';
import Nav from './Nav/nav.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: 'out',
		};
	}

	render() {
		return (
			<Nav />
		);
	}
}

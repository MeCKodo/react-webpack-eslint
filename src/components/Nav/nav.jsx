import React, { Component } from 'react';
import './_nav.scss';
export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ['out1', 'out2'],
		};
	}

	render() {
		const lists = this.state.list.map(item => <li>{item}</li>);
		return (
			<header className="header">
				<h1>Poorsay</h1>
				<div className="menu">
					<ul>
						{lists}
					</ul>
				</div>
			</header>
		);
	}
}

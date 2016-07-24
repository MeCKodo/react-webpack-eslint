import React, { Component } from 'react';

export default class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = { likesCount: 2 };
		console.log('hello');
	}

	onLike = () => {
		const newLikesCount = this.state.likesCount + 1;
		this.setState({ likesCount: newLikesCount });
	}

	unlike = () => {
		const newLikesCount = this.state.likesCount - 2;
		this.setState({ likesCount: newLikesCount });
	}

	render() {
		return (
			<div>
				Likes : <span>{this.state.likesCount}</span>
				<div><button className="default" onClick={this.onLike}>Like Me</button></div>
				<div><button onClick={this.unlike}>unLike Me</button></div>
			</div>
		);
	}
}

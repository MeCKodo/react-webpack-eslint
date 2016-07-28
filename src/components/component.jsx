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
				<div>
					<button className="default" onClick={this.onLike}>Like Me</button>
				</div>
				<div>
					<button onClick={this.unlike}>unLike Me</button>
				</div>
				<div className="box"></div>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Username</th>
							<th>Date registered</th>
							<th>Role</th>
							<th>Team</th>
							<th>Status</th>
							<th>Operations</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>id</td>
							<td>name</td>
							<td>registeredDate</td>
							<td>role</td>
							<td>status</td>
							<td>
								<span className="label label-success">Active</span>
							</td>
							<td>...</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

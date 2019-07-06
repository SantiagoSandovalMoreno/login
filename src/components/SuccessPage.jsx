import { connect } from 'react-redux';
import imgsuccess from '../img/noun-success-2484180.png';

import React, { Component } from 'react';

class SuccessPage extends Component {
	render() {
		const { Auth } = this.props.login;
		console.log(Auth);

		return (
			<div className="container">
				{Auth === 'Logged' && (
					<div className="page-content">
						<img src={imgsuccess} alt="img-success" />
						<span className="message-success ml-2">Successful Loged</span>
					</div>
				)}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		login: state.login.login.login
	};
};
const mapActionstoProps = (dispatch) => ({});

export default connect(mapStateToProps, mapActionstoProps)(SuccessPage);

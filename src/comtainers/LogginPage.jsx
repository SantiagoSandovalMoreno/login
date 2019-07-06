import React, { Component } from 'react';

import { fetchLoginReq } from '../actions/index';
import { connect } from 'react-redux';
import Form from '../components/Form';
class LogginPage extends Component {
	state = {
		user: '',
		pass: '',
		validate: false
	};
	handleInput = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleLogin = () => {
		const { Login } = this.props;
		const { user, pass, validate } = this.state;
		this.setState(
			{
				validate: true
			},
			() => {
				var body = {
					user,
					pass
				};
				Login(body, validate);
			}
		);
	};
	render() {
		const { Auth } = this.props.login;
		return <div>{Auth !== 'Logged' && <Form handleInput={this.handleInput} handleLogin={this.handleLogin} />}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login.login.login
	};
};
const mapActionstoProps = (dispatch) => ({
	Login: (body, validate) => dispatch(fetchLoginReq(body, validate))
});

export default connect(mapStateToProps, mapActionstoProps)(LogginPage);

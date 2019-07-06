import React from 'react';
import btn from '../img/shape.png';
import logo from '../img/noun-fire-2475241.png';
const Form = ({ handleInput, handleLogin }) => {
	return (
		<div className="container">
			<div className="page-content">
				<img className="img-valign" src={logo} alt="logo" />
				<form action="">
					<div className="form-group">
						<input
							onChange={handleInput}
							className="input_loggin"
							type="text"
							placeholder="Login"
							name="user"
						/>
					</div>
					<div className="form-group">
						<input
							onChange={handleInput}
							className="input_loggin"
							type="password"
							placeholder="Password"
							name="pass"
						/>
					</div>
					<div className="form-group">
						<button onClick={handleLogin} type="button" className="button_loggin">
							Login
						</button>
					</div>
					<div className="form-group mt">
						<p>is simply dummy text of the printing and typeseting industry. Lorem Ipsum has</p>
					</div>
					<div className="form-group">
						<button type="button" className="button_config">
							<img src={btn} alt="img-button" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;

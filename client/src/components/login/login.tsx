import React from "react";
import "./login.css";
const Login = () => {
	return (
		<>
			<div className='container'>
				<div className='box'></div>
				<div className='container-forms'>
					<div className='container-info'>
						<div className='info-item'>
							<div className='table'>
								<div className='table-cell'>
									<p>Have an account?</p>
									<div className='btn'>Log in</div>
								</div>
							</div>
						</div>
						<div className='info-item'>
							<div className='table'>
								<div className='table-cell'>
									<p>Don't have an account?</p>
									<div className='btn'>Sign up</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container-form'>
						<div className='form-item log-in'>
							<div className='table'>
								<div className='table-cell'>
									<input type='text' name='Username' placeholder='Username' />
									<input
										type='Password'
										name='Password'
										placeholder='Password'
									/>
									<div className='btn'>Log in</div>
								</div>
							</div>
						</div>
						<div className='form-item sign-up'>
							<div className='table'>
								<div className='table-cell'>
									<input type='text' name='email' placeholder='Email' />
									<input type='text' name='fullName' placeholder='Full Name' />
									<input type='text' name='Username' placeholder='Username' />
									<input
										type='Password'
										name='Password'
										placeholder='Password'
									/>
									<div className='btn'>Sign up</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;

import { Link } from 'react-router-dom';

import googleLogo from '../../assets/images/auth/google_logo.svg';

export const LoginView = () => {
	return (
		<div className='auth__login-main'>
			<div className='auth__login-main-content'>
				<h2 className='title'>Login</h2>
				<form>
					<input type='text' name='email' placeholder='Email' className='auth__form-input' autoComplete='off' />
					<input type='password' name='password' placeholder='Password' className='auth__form-input' />
					<button className='auth__form-button'>Login</button>

					<div className='auth__social-networks'>
						<h4 className='sub-title'>Or login with</h4>
						<div className='auth__google-button'>
							<div className='auth__google-logo'>
								<img src={googleLogo} alt='google button' />
							</div>
							<p className='auth__google-button-text'>
								<b>Sign in with google</b>
							</p>
						</div>
					</div>

					<Link to='' className='button'>
						Create new account
					</Link>
				</form>
			</div>
		</div>
	);
};

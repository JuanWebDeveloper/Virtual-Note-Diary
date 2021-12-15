import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { loginAction } from '../../actions/auth';

import googleLogo from '../../assets/images/auth/google_logo.svg';

export const LoginView = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(loginAction(email, password));
	};

	return (
		<div className='auth__login-main'>
			<div className='auth__login-main-content'>
				<h2 className='title'>Login</h2>
				<form className='auth__form' onSubmit={handleLogin}>
					<input type='text' name='email' placeholder='Email' className='auth__form-input' autoComplete='off' value={email} onChange={handleInputChange} />
					<input type='password' name='password' placeholder='Password' className='auth__form-input' value={password} onChange={handleInputChange} />
					<button className='auth__form-button'>Login</button>

					<div className='auth__social-networks'>
						<h4 className='sub-title'>Or login with</h4>
						<div className='auth__google-button'>
							<div className='auth__google-logo'>
								<img src={googleLogo} alt='google button' />
							</div>
							<p className='auth__google-button-text'>Sign in with google</p>
						</div>
					</div>

					<Link to='/auth/register' className='auth__link'>
						Create new account
					</Link>
				</form>
			</div>
		</div>
	);
};

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { loginWithEmailAndPasswordAction, loginWithGoogleAction } from '../../actions/auth';
import { loginFormValidation } from '../../helpers/formsValidation';

import googleLogo from '../../assets/images/auth/google_logo.svg';
import { useState } from 'react';

export const LoginView = () => {
	const dispatch = useDispatch();
	const { errorMessage, withMistakes } = useSelector((state) => state.interface);

	const [validateField, setValidateField] = useState();

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		const validationForm = loginFormValidation(formValues, dispatch);
		setValidateField(validationForm.field);

		if (validationForm.errorStatus) {
			dispatch(loginWithEmailAndPasswordAction(email, password));
		}
	};

	const handleLoginWithGoogle = () => dispatch(loginWithGoogleAction());

	return (
		<div className='auth__login-main'>
			<div className='auth__login-main-content'>
				<h2 className='title'>Login</h2>
				<form className='auth__form' onSubmit={handleLogin}>
					{withMistakes && <div className='auth__form-alert-error'>{errorMessage}</div>}

					<input
						type='text'
						name='email'
						placeholder='Email'
						className={`auth__form-input ${validateField === 'email' && 'auth__form-input-error'}`}
						autoComplete='off'
						value={email}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						className={`auth__form-input ${validateField === 'password' && 'auth__form-input-error'}`}
						value={password}
						onChange={handleInputChange}
					/>
					<button className='auth__form-button'>Login</button>

					<div className='auth__social-networks'>
						<h4 className='sub-title'>Or login with</h4>
						<div className='auth__google-button' onClick={handleLoginWithGoogle}>
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

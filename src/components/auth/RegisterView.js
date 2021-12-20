import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { registerFormValidation } from '../../helpers/formsValidation';
import { registerAction } from '../../actions/auth';

export const RegisterView = () => {
	const dispatch = useDispatch();
	const { errorMessage, withMistakes } = useSelector((state) => state.interface);
	const [validateField, setValidateField] = useState();

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const { name, email, password, passwordConfirm } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();

		const validationForm = registerFormValidation(formValues, dispatch);
		setValidateField(validationForm.field);

		if (validationForm.errorStatus) {
			dispatch(registerAction(name, email, password));
		}
	};

	return (
		<div className='auth__register-main'>
			<div className='auth__register-main-content'>
				<h2 className='title'>Register</h2>
				<form className='auth__form' onSubmit={handleRegister}>
					{withMistakes && <div className='auth__form-alert-error'>{errorMessage}</div>}

					<input
						type='text'
						name='name'
						placeholder='Name'
						className={`auth__form-input ${validateField === 'name' && 'auth__form-input-error'}`}
						autoComplete='off'
						value={name}
						onChange={handleInputChange}
					/>
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
						className={`auth__form-input ${validateField === 'password' || validateField === 'passwords not match' ? 'auth__form-input-error' : null}`}
						value={password}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						name='passwordConfirm'
						placeholder='Confirm password'
						className={`auth__form-input ${validateField === 'passwordConfirm' || validateField === 'passwords not match' ? 'auth__form-input-error' : null}`}
						value={passwordConfirm}
						onChange={handleInputChange}
					/>
					<button className='auth__form-button'>Register</button>

					<Link to='/auth/login' className='auth__link'>
						Already registered?
					</Link>
				</form>
			</div>
		</div>
	);
};

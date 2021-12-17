import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { registerFormValidation } from '../../helpers/formsValidation';

export const RegisterView = () => {
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const { name, email, password, passwordConfirm } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();

		const validationForm = registerFormValidation(formValues);
		console.log(validationForm);

		if (validationForm === true) {
			console.log(name, email, password, passwordConfirm);
		}
	};

	return (
		<div className='auth__register-main'>
			<div className='auth__register-main-content'>
				<h2 className='title'>Register</h2>
				<form className='auth__form' onSubmit={handleRegister}>
					<div className='auth__form-alert-error'>Error Message</div>
					<input type='text' name='name' placeholder='Name' className='auth__form-input' autoComplete='off' value={name} onChange={handleInputChange} />
					<input type='text' name='email' placeholder='Email' className='auth__form-input' autoComplete='off' value={email} onChange={handleInputChange} />
					<input type='password' name='password' placeholder='Password' className='auth__form-input' value={password} onChange={handleInputChange} />
					<input
						type='password'
						name='passwordConfirm'
						placeholder='Confirm password'
						className='auth__form-input'
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

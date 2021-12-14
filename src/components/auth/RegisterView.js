import { Link } from 'react-router-dom';

export const RegisterView = () => {
	return (
		<div className='auth__register-main'>
			<div className='auth__register-main-content'>
				<h2 className='title'>Register</h2>
				<form className='auth__form'>
					<input type='text' name='name' placeholder='Name' className='auth__form-input' autoComplete='off' />
					<input type='text' name='email' placeholder='Email' className='auth__form-input' autoComplete='off' />
					<input type='password' name='password' placeholder='Password' className='auth__form-input' />
					<input type='password' name='passwordConfirm' placeholder='Confirm password' className='auth__form-input' />
					<button className='auth__form-button'>Register</button>

					<Link to='/auth/login' className='button'>
						Already registered?
					</Link>
				</form>
			</div>
		</div>
	);
};

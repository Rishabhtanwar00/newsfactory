import { useState } from 'react';

const SignIn = () => {
	const [currentState, setCurrentState] = useState('Sign In');
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(userData);
	};

	const handleChange = (field, value) => {
		setUserData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div className='mb-16 flex flex-col items-center justify-center'>
			<div className='mt-20 text-3xl flex items-center gap-5'>
				<p className='text-dark font-semibold'>{currentState}</p>
			</div>
			<form
				onSubmit={submitHandler}
				className='mt-3 flex flex-col w-full max-w-[350px] sm:w-fit items-center justify-center'
			>
				{currentState === 'Sign Up' && (
					<input
						className='px-4 py-2 mt-5 border border-light rounded w-full sm:w-[400px] placeholder:text-sm'
						type='text'
						placeholder='Name'
						required
						onChange={(e) => handleChange('name', e.target.value)}
					/>
				)}
				<input
					className='px-4 py-2 mt-5 border border-light rounded w-full sm:w-[400px] placeholder:text-sm'
					type='email'
					placeholder='Email Address'
					required
					onChange={(e) => handleChange('email', e.target.value)}
				/>
				<input
					className='px-4 py-2 mt-5 border border-light rounded w-full sm:w-[400px] placeholder:text-sm'
					type='password'
					placeholder='Password'
					required
					onChange={(e) => handleChange('password', e.target.value)}
				/>
				<div className='flex justify-between mt-2 text-light text-sm'>
					<p className='cursor-pointer hover:text-primary transition-all duration-150 ease-in-out'>
						Forget Password?
					</p>
					<p
						className='cursor-pointer hover:text-primary transition-all duration-150 ease-in-out'
						onClick={() =>
							currentState === 'Sign Up'
								? setCurrentState('Sign In')
								: setCurrentState('Sign Up')
						}
					>
						{currentState === 'Sign Up' ? 'Sign in Here' : 'Create account'}
					</p>
				</div>
				<div className='flex justify-center'>
					<button
						type='submit'
						className='bg-dark text-back text-base py-2 px-8 mt-5 w-fit rounded active:scale-90 transition-all duration-200 ease-in-out'
					>
						{currentState === 'Sign Up' ? 'Sign Up' : 'Sign In'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

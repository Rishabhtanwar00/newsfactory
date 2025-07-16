import { Link } from 'react-router-dom';

const Subscribenow = () => {
	return (
		<div className='w-full flex flex-col gap-5 bg-slate-200 p-4 items-center tracking-wider text-center rounded-md'>
			<h1 className='text-2xl sm:text-3xl text-dark font-semibold'>
				Stay Updated
			</h1>
			<p className='text-base sm:text-xl text-light'>
				Subscribe to get the latest news articles delivered straight to your
				inbox.
			</p>
			<Link
				to='/subscribe'
				className='px-10 py-2 bg-primary text-back my-2 rounded'
			>
				Subscribe Now
			</Link>
		</div>
	);
};

export default Subscribenow;

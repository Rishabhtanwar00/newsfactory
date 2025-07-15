import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { newsArticles } from '../utils/Data';
import SideNewsFeed from '../components/SideNewsFeed';
import NewsFeed from '../components/NewsFeed';

const Homepage = () => {
	return (
		<div className=''>
			<div className='pt-5'>
				<h1 className='text-3xl font-semibold tracking-wider text-dark border-l-4 border-primary py-2 px-5 my-3 uppercase'>
					Headlines
				</h1>
				<HeroSection />
			</div>
			<p className='h-[2px] bg-gray-200 w-full my-10'></p>
			<div className='flex flex-col lg:flex-row gap-5 pt-5 pb-16'>
				<div className='w-full lg:w-[20%] flex flex-row lg:flex-col gap-10'>
					<SideNewsFeed
						heading='Technology'
						newsArray={[...newsArticles].reverse().slice(0, 4)}
					/>
					<div className='mt-0 lg:mt-36'>
						<SideNewsFeed
							heading='Sports'
							newsArray={[...newsArticles].slice(0, 4)}
						/>
					</div>
				</div>
				<p className='block lg:hidden h-[2px] bg-gray-200 w-full my-10'></p>
				<div className='w-full lg:w-[60%]'>
					<NewsFeed
						heading='Latest Stories'
						newsArray={[...newsArticles].slice(0, 6)}
					/>
					<p className='h-[2px] bg-gray-200 w-full my-10'></p>
					<NewsFeed
						heading='Most Read'
						newsArray={[...newsArticles].reverse().slice(1, 6)}
					/>
				</div>
				<p className='block lg:hidden h-[2px] bg-gray-200 w-full my-10'></p>
				<div className='w-full lg:w-[20%] flex flex-row lg:flex-col gap-10'>
					<SideNewsFeed
						heading='Business'
						newsArray={[...newsArticles].reverse().slice(2, 5)}
					/>
					<div className='mt-0 lg:mt-36'>
						<SideNewsFeed
							heading='Entertainment'
							newsArray={[...newsArticles].slice(1, 6)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;

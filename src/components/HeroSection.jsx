import { newsArticles } from '../utils/Data';
import { formatDateTime, processvalue } from '../utils/CommonFunctions';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='py-5 flex flex-col lg:flex-row gap-10 lg:gap-5'>
			<Link
				to={`/news/${processvalue(newsArticles[0].title)}`}
				className='w-full lg:w-[65%] flex flex-col tracking-wide'
			>
				<img
					src={newsArticles[0].image}
					alt='Featured article'
					className='w-[100%] h-[320px] object-cover rounded'
				/>
				<div className='mt-2'>
					<h2 className='font-semibold text-xl tracking-wider'>
						{newsArticles[0].title}
					</h2>
					<p className='w-full text-base text-light h-13 overflow-hidden line-clamp-2'>
						{newsArticles[0].description}
					</p>
				</div>

				<div className='flex justify-between text-sm mt-2'>
					<p className='font-semibold text-primary'>
						{newsArticles[0].category}
					</p>
					<p className='text-light'>
						{newsArticles[0].author +
							' | ' +
							formatDateTime(newsArticles[0].dateTime)}
					</p>
				</div>
			</Link>
			<div className='w-full lg:w-[35%] flex flex-col gap-8 lg:gap-5 text-sm tracking-wide'>
				{newsArticles.slice(1, 4).map((article) => (
					<Link
						to={`/news/${processvalue(article.title)}`}
						key={article.id}
						className='flex gap-3'
					>
						<img
							src={article.image}
							alt='Featured article'
							className='w-full h-[100px] object-cover rounded'
						/>
						<div className=''>
							<h2 className='font-semibold'>{article.title}</h2>
							<p className='w-full text-sm text-light h-15 overflow-hidden line-clamp-3'>
								{article.description}
							</p>
							<p className='font-semibold text-xs text-primary'>
								{article.category}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HeroSection;

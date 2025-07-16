import { Link } from 'react-router-dom';
import { processvalue } from '../utils/CommonFunctions';

const NewsFeed = ({ heading, newsArray }) => {
	return (
		<div>
			<h1 className='text-xl font-semibold tracking-wider text-dark border-l-4 border-primary py-0.5 px-3 mb-5 uppercase'>
				{heading}
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10 text-sm tracking-wide'>
				{newsArray.map((article) => (
					<Link
						to={`/news/${processvalue(article.title)}`}
						key={article.id}
						className='flex flex-col gap-2'
					>
						<div className='flex gap-2'>
							<img
								src={article.image}
								alt='Featured article'
								className='w-full h-[100px] object-cover rounded'
							/>
							<h2 className='font-semibold'>{article.title}</h2>
						</div>
						<div className=''>
							<p className='w-full text-sm text-light h-15 overflow-hidden line-clamp-3'>
								{article.description}
							</p>
							<p className='font-semibold text-xs text-primary mt-1'>
								{article.category}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default NewsFeed;

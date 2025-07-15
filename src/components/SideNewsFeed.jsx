import { Link } from 'react-router-dom';
import { processvalue } from '../utils/CommonFunctions';

const SideNewsFeed = ({ heading, newsArray }) => {
	return (
		<div>
			<h1 className='text-sm font-semibold tracking-wider text-dark border-l-4 border-primary py-[1px] px-2 mb-5 uppercase'>
				{heading}
			</h1>
			<div className='flex flex-col gap-5'>
				{newsArray.map((article) => (
					<Link
						to={`/${processvalue(article.title)}`}
						key={article.id}
						className='flex flex-col gap-2'
					>
						<h2 className='text-[15px] font-[500]'>{article.title}</h2>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SideNewsFeed;

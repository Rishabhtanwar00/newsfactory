import { useEffect, useState } from 'react';
import { newsArticles } from '../utils/Data';
import SideNewsFeed from '../components/SideNewsFeed';
import { FaSearch } from 'react-icons/fa';
import { useDebounce } from '../hooks/useDebounce';
import { Link, useSearchParams } from 'react-router-dom';
import { processvalue } from '../utils/CommonFunctions';

const Searchpage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const queryParam = searchParams.get('q') || '';
	const [searchQuery, setSearchQuery] = useState(queryParam);
	const debouncedSearchQuery = useDebounce(searchQuery, 500);
	const [filteredNews, setFilteredNews] = useState(newsArticles.slice(0, 3));

	const handleChange = (e) => {
		const value = e.target.value;
		setSearchQuery(value);
		setSearchParams({ q: value });
	};

	useEffect(() => {
		const searchTerm = debouncedSearchQuery?.toLowerCase();
		const results = !searchTerm
			? newsArticles.slice(0, 3)
			: newsArticles.filter(
					(article) =>
						article.title.toLowerCase().includes(searchTerm) ||
						article.description.toLowerCase().includes(searchTerm) ||
						article.author.toLowerCase().includes(searchTerm)
			  );
		setFilteredNews(results);
		console.log('Filtered News:', results);
	}, [debouncedSearchQuery]);

	return (
		<div className='py-5'>
			<div className='flex flex-col lg:flex-row gap-10 pt-5 pb-16 tracking-wide'>
				<p className='block lg:hidden h-[2px] bg-gray-200 w-full my-10'></p>
				<div className='w-full lg:w-[25%] flex flex-row lg:flex-col gap-10'>
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
				<div className='w-full lg:w-[50%] flex flex-col -order-1 lg:order-none'>
					<div className='flex flex-col gap-2 w-full'>
						<p>Search news,topics and more</p>
						<div className='flex'>
							<input
								type='text'
								placeholder='search here'
								value={searchQuery}
								onChange={handleChange}
								required
								className='w-full border border-r-0 border-dark px-3 py-2 text-base rounded rounded-r-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
							/>
							<p className='px-5 py-2 bg-dark rounded-r flex items-center justify-center'>
								<FaSearch size={18} className='text-back' />
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-5 my-10 items-center'>
						{filteredNews.length > 0 ? (
							filteredNews.map((article) => (
								<Link
									to={`/${processvalue(article.title)}`}
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
										<div className='flex justify-between text-xs mt-1'>
											<p className='font-semibold text-primary'>
												{article.category}
											</p>
											<p className='lg:hidden xl:block text-light italic'>
												{'- '}
												{article.author}
											</p>
										</div>
									</div>
								</Link>
							))
						) : (
							<div>
								<p className='text-light text-center mb-10'>No results found</p>
								<div className='w-full flex flex-col'>
									<h1 className='text-sm font-semibold tracking-wider text-dark border-l-4 border-primary py-[1px] px-2 mb-5 uppercase'>
										Read Latest news
									</h1>
									<div className='flex flex-col gap-5'>
										{newsArticles.slice(0, 4).map((article) => (
											<Link to='/' key={article.id} className='flex gap-3'>
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
							</div>
						)}
					</div>
				</div>
				<p className='block lg:hidden h-[2px] bg-gray-200 w-full my-10'></p>
				<div className='w-full lg:w-[25%] flex flex-row lg:flex-col gap-10'>
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

export default Searchpage;

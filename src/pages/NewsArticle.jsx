import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { newsArticles } from '../utils/Data';
import SideNewsFeed from '../components/SideNewsFeed';
import { formatDate, processvalue } from '../utils/CommonFunctions';
import {
	FaFacebook,
	FaInstagram,
	FaLink,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';

const NewsArticle = () => {
	const { news_title } = useParams();
	const [news, setNews] = useState(null);

	useEffect(() => {
		const foundNews = newsArticles.find(
			(article) => processvalue(article.title) === news_title
		);
		setNews(foundNews);
	}, [news_title]);

	return (
		<div className='flex flex-col lg:flex-row gap-10 py-10 tracking-wider'>
			<div className='w-full lg:w-[80%]'>
				{news ? (
					<div>
						<h1 className='text-4xl font-semibold tracking-wider text-dark'>
							{news.title}
						</h1>
						<p className='text-2xl my-2 text-light'>{news.description}</p>
						<div className='flex justify-between items-center py-5 border-y-2 border-gray-200 my-5'>
							<div className=''>
								<p className='text-primary'>
									By <span className='font-bold text-base'>{news.author}</span>
								</p>
								<p className='text-light'>{formatDate(news.dateTime)}</p>
							</div>
							<div className='flex gap-4'>
								<button className='text-white bg-dark p-2 rounded-lg hover:bg-primary transition-all duration-300 ease-in-out'>
									<FaInstagram size={25} className='' />
								</button>
								<button className='text-white bg-dark p-2 rounded-lg hover:bg-primary transition-all duration-300 ease-in-out'>
									<FaWhatsapp size={25} className='' />
								</button>
								<button className='text-white bg-dark p-2 px-3 rounded-lg hover:bg-primary transition-all duration-300 ease-in-out'>
									<FaTwitter size={20} className='' />
								</button>
								<button className='text-white bg-dark p-2  px-3 rounded-lg hover:bg-primary transition-all duration-300 ease-in-out'>
									<FaLink size={20} className='' />
								</button>
							</div>
						</div>
						<img src={news.image} alt='' className='w-full h-auto' />
						<div className='my-10 text-[18px] text-light max-w-full sm:max-w-[80%] tracking-wide m-auto'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
								voluptatibus aut id iste necessitatibus, laboriosam tempore quo
								animi optio harum vero, architecto molestiae esse magnam
								nesciunt similique accusantium recusandae iure quis! Cupiditate,
								ea! Magni tempore, dignissimos molestias at ab dolor culpa
								perspiciatis eius repudiandae commodi, totam accusantium fugiat
								esse atque maxime quam fugit ratione enim nemo sequi aliquid non
								ipsa repellendus incidunt. Possimus, rerum. Minima cum dolorum,
								aliquam optio necessitatibus rem animi sit inventore mollitia,
								quia earum nisi deserunt officiis recusandae minus provident?
								Ipsa quidem, praesentium maxime velit omnis aspernatur suscipit
								aperiam magni repellendus nesciunt modi nobis porro sequi animi.
							</p>
							<h1 className='text-dark font-semibold my-5'>
								{' '}
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
								aliquam fuga obcaecati minima
							</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
								voluptatibus aut id iste necessitatibus, laboriosam tempore quo
								animi optio harum vero, architecto molestiae esse magnam
								nesciunt similique accusantium recusandae iure quis! Cupiditate,
								ea! Magni tempore, dignissimos molestias at ab dolor culpa
								perspiciatis eius repudiandae commodi, totam accusantium fugiat
								esse atque maxime quam fugit ratione enim nemo sequi aliquid non
								ipsa repellendus incidunt. Possimus, rerum. Minima cum dolorum,
								aliquam optio necessitatibus rem animi sit inventore mollitia,
								quia earum nisi deserunt officiis recusandae minus provident?
								Ipsa quidem, praesentium maxime velit omnis aspernatur suscipit
								aperiam magni repellendus nesciunt modi nobis porro sequi animi.
							</p>
							<p className='my-5'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
								voluptatibus aut id iste necessitatibus, laboriosam tempore quo
								animi optio harum vero, architecto molestiae esse magnam
								nesciunt similique accusantium recusandae iure quis! Cupiditate,
								ea! Magni tempore, dignissimos molestias at ab dolor culpa
								perspiciatis eius repudiandae commodi, totam accusantium fugiat
								esse atque maxime quam fugit ratione enim nemo sequi aliquid non
								ipsa repellendus incidunt. Possimus, rerum. Minima cum dolorum,
								aliquam optio necessitatibus rem animi sit inventore mollitia,
								quia earum nisi deserunt officiis recusandae minus provident?
								Ipsa quidem, praesentium maxime velit omnis aspernatur suscipit
								aperiam magni repellendus nesciunt modi nobis porro sequi animi.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
								voluptatibus aut id iste necessitatibus, laboriosam tempore quo
								animi optio harum vero, architecto molestiae esse magnam
								nesciunt similique accusantium recusandae iure quis! Cupiditate,
								ea! Magni tempore, dignissimos molestias at ab dolor culpa
								perspiciatis eius repudiandae commodi, totam accusantium fugiat
								esse atque maxime quam fugit ratione enim nemo sequi aliquid non
								ipsa repellendus incidunt. Possimus, rerum. Minima cum dolorum,
								aliquam optio necessitatibus rem animi sit inventore mollitia,
								quia earum nisi deserunt officiis recusandae minus provident?
								Ipsa quidem, praesentium maxime velit omnis aspernatur suscipit
								aperiam magni repellendus nesciunt modi nobis porro sequi animi.
							</p>
							<h1 className='text-dark font-semibold my-5'>
								{' '}
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
								aliquam fuga obcaecati minima
							</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
								voluptatibus aut id iste necessitatibus, laboriosam tempore quo
								animi optio harum vero, architecto molestiae esse magnam
								nesciunt similique accusantium recusandae iure quis! Cupiditate,
								ea! Magni tempore, dignissimos molestias at ab dolor culpa
								perspiciatis eius repudiandae commodi, totam accusantium fugiat
								esse atque maxime quam fugit ratione enim nemo sequi aliquid non
								ipsa repellendus incidunt. Possimus, rerum. Minima cum dolorum,
								aliquam optio necessitatibus rem animi sit inventore mollitia,
								quia earum nisi deserunt officiis recusandae minus provident?
								Ipsa quidem, praesentium maxime velit omnis aspernatur suscipit
								aperiam magni repellendus nesciunt modi nobis porro sequi animi.
							</p>
						</div>
					</div>
				) : (
					<p>No found</p>
				)}
			</div>
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
	);
};

export default NewsArticle;

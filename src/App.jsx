import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Searchpage from './pages/Searchpage';
import NewsArticle from './pages/NewsArticle';
import ScrollToTop from './utils/ScrollToTop';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className='fixed w-[100vw] mt-[-64px] lg:mt-[-106px]'>
				<Navbar />
			</div>
			<div className='mt-[64px] lg:mt-[106px] px-[5vw] sm:px-[15vw]'>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/search' element={<Searchpage />} />
					<Route path='/news/:news_title' element={<NewsArticle />} />

					<Route
						path='*'
						element={
							<p className='w-[100%] h-[280px] flex justify-center items-center text-2xl tracking-widest text-light font-semibold'>
								Coming soon...
							</p>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

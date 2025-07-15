import Logo from '../assets/newsfactory.png';
import MenuIcon from '../assets/menuicon.png';
import CloseIcon from '../assets/closeicon.png';
import SearchIcon from '../assets/searchicon.png';
import UserIcon from '../assets/usericon.png';

import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SideMenu from './SideMenu';
import { processvalue } from '../utils/CommonFunctions';
import { newsCategories } from '../utils/Data';

const Navbar = () => {
	const location = useLocation().pathname;
	const [showMenu, setShowMenu] = useState(false);

	const toogleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className='relative w-full bg-back'>
			<nav className='relative flex items-center justify-between p-3 px-[20px] pr-[40px] shadow z-[100]'>
				<button
					onClick={toogleMenu}
					className='rounded-md hover:bg-gray-100 active:scale-95 transition-all duration-300 ease-in-out p-1'
				>
					<img
						src={showMenu ? CloseIcon : MenuIcon}
						alt=''
						className='h-8 lg:h-10 w-auto'
					/>
				</button>
				<NavLink
					to='/'
					className='absolute left-1/2 transform -translate-x-1/2'
				>
					<img src={Logo} alt='' className='h-8 lg:h-10 w-auto' />
				</NavLink>
				<div className='hidden md:flex items-center gap-2 lg:gap-4 text-sm lg:text-base tracking-wide'>
					<NavLink
						to='/search'
						className='rounded-md hover:bg-gray-100 active:scale-95 transition-all duration-300 ease-in-out p-1'
					>
						<img src={SearchIcon} alt='' className='h-6 lg:h-7 w-auto' />
					</NavLink>
					<NavLink
						to='/signin'
						className='bg-gray-100 hover:bg-dark hover:text-white px-4 py-1.5 rounded-md active:scale-95 transition-all duration-300 ease-in-out'
					>
						<p>Sign In</p>
					</NavLink>
					<NavLink
						to='/subscribe'
						className='bg-dark text-white px-4 py-1.5 rounded-md hover:bg-primary active:scale-95 transition-all duration-300 ease-in-out'
					>
						<p>Subscribe</p>
					</NavLink>
				</div>
				<div className='block md:hidden'>
					<NavLink to='/signin'>
						<img
							src={UserIcon}
							alt=''
							className='h-8 w-auto bg-gray-100 p-1 rounded-md active:scale-95 transition-all duration-300 ease-in-out'
						/>
					</NavLink>
				</div>
			</nav>
			<div className={`${showMenu ? 'block' : 'hidden'} absolute left-0 z-10`}>
				<SideMenu setShowMenu={setShowMenu} />
			</div>
			<div
				className={`${showMenu && 'block'} lg:hidden p-0.5 bg-primary`}
			></div>
			<div
				className={`hidden lg:flex items-center justify-center px-[10px] m-auto bg-primary text-back text-sm tracking-wider font-semibold`}
			>
				{newsCategories.slice(0, 6).map((item, index) => (
					<NavLink
						key={index}
						to={`/${processvalue(item.category)}`}
						className='flex flex-col justify-between items-center hover:bg-[#C00000] active:scale-95 transition-all duration-300 ease-in-out'
					>
						<p className='p-2 px-4'>{item.category.toUpperCase()}</p>
						<p
							className={`bg-back w-full h-[2px] ${
								location.includes(processvalue(item.category))
									? 'block'
									: 'hidden'
							}`}
						></p>
					</NavLink>
				))}
				<button onClick={() => setShowMenu(true)}>
					<p className='p-2 pl-3 hover:bg-[#C00000] active:scale-95 transition-all duration-300 ease-in-out'>
						MORE
					</p>
				</button>
			</div>
		</div>
	);
};

export default Navbar;

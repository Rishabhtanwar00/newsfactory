import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { processvalue } from '../utils/CommonFunctions';
import { newsCategories } from '../utils/Data';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SideMenu = ({ setShowMenu }) => {
	const location = useLocation().pathname;
	const [expanded, setExpanded] = useState(null);

	const toggle = (category) => {
		setExpanded(expanded === category ? null : category);
	};

	return (
		<aside className='sm:w-full sm:max-w-xs w-[100vw] h-fit min-h-screen overflow-y-auto bg-white shadow-md border-r tracking-wider'>
			<ul className='text-sm font-semibold pr-3 pl-1'>
				<li
					className={`py-2 pl-2 ${
						location === '/' && 'border-l-4 border-primary text-primary'
					}`}
				>
					<NavLink to='/' onClick={() => setShowMenu(false)}>
						Home
					</NavLink>
				</li>

				{newsCategories.map(({ category, subcategories }) => (
					<li key={category} className='border-t'>
						<button
							onClick={() => toggle(category)}
							className='w-full flex items-center justify-between gap-2'
						>
							<span
								className={`py-2 pl-2 ${
									location.includes(processvalue(category)) &&
									'border-l-4 border-primary text-primary'
								}`}
							>
								{category}
							</span>
							{expanded === category ? (
								<FaChevronUp size={12} />
							) : (
								<FaChevronDown size={12} />
							)}
						</button>

						{expanded === category && (
							<ul className='pl-3 pt-2 pb-1 space-y-1 font-normal text-light border-t'>
								<li className='font-semibold p-1 hover:text-black cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'>
									<NavLink
										to={`/${processvalue(category)}`}
										onClick={() => setShowMenu(false)}
									>
										{category}
									</NavLink>
								</li>
								{subcategories.map((sub, idx) => (
									<li
										key={idx}
										className='p-1 hover:text-black cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'
									>
										<NavLink
											to={`/${processvalue(category)}/${processvalue(sub)}`}
											onClick={() => setShowMenu(false)}
										>
											{sub}
										</NavLink>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SideMenu;

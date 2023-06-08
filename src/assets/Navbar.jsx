function Navbar() {
	return (
		<div>
			{/* navigation */}
			<nav className='overflow-hidden flex font-bold m-4'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<ul className='flex justify-between h-16 text-left'>
						<li>
							<a
								className='text-3xl flex-shrink-0 block text-gray-700 text-center px-4 py-2 hover:bg-purple-600 text-black hover:text-white'
								href='#home'
							>
								Home
							</a>
						</li>
						<li>
							<a
								className='text-3xl flex-shrink-0 block text-gray-700 text-center px-4 py-2 hover:bg-purple-600 text-black hover:text-white'
								href='#about'
							>
								About
							</a>
						</li>
						<li>
							<a
								className='text-3xl flex-shrink-0 block text-gray-700 text-center px-4 py-2 hover:bg-purple-600 text-black hover:text-white'
								href='#projects'
							>
								Projects
							</a>
						</li>
						<li>
							<a
								className='text-3xl flex-shrink-0 block text-gray-700 text-center px-4 py-2 hover:bg-purple-600 text-black hover:text-white'
								href='#contact'
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar

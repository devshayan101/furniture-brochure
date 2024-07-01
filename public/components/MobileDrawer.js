const MobileDrawer = ({ isOpen, toggleDrawer }) =>
	isOpen && (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleDrawer}>
			<div className="absolute right-0 top-0 bg-gray-800 w-64 h-full shadow-lg p-6">
				<nav className="space-y-4">
					<a href="index.html" className="text-white block hover:text-orange-500">
						Home
					</a>
					<a href="about-us.html" className="text-white block hover:text-orange-500">
						About
					</a>
					<a href="products.html" className="text-white block hover:text-orange-500">
						Products
					</a>
					<a href="#" className="text-white block hover:text-orange-500">
						Services
					</a>
				</nav>
			</div>
		</div>
	);

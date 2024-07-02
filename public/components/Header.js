const Header = ({ isMobile, isScrolled, toggleDrawer }) => {
	return (
		<header className={`flex justify-between items-center p-2 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'nav-translucent' : 'bg-gradient'}`}>
			<div className="responsive-logo">
				<img src="img/logo.png" alt="Company Logo" className="h-full" />
			</div>
			{!isMobile && (
				<nav className="flex-1 flex justify-center space-x-8">
					<a href="index.html" className="text-white hover:text-orange-500 hover:shadow-lg hover:px-3 hover:py-1 hover:glass-card transition-shadow px-4 py-2">
						Home
					</a>
					<a href="about-us.html" className="text-white hover:text-orange-500 hover:shadow-lg hover:px-3 hover:py-1 hover:glass-card transition-shadow px-4 py-2">
						About
					</a>
					<a href="products.html" className="text-white hover:text-orange-500 hover:shadow-lg hover:px-3 hover:py-1 hover:glass-card transition-shadow px-4 py-2">
						Products
					</a>
					<a href="#" className="text-white hover:text-orange-500 hover:shadow-lg hover:px-3 hover:py-1 hover:glass-card transition-shadow px-4 py-2">
						Services
					</a>
				</nav>
			)}
			{isMobile && (
				<div className="text-white mr-4" onClick={toggleDrawer}>
					<i className="fas fa-bars"></i>
				</div>
			)}
		</header>
	);
};
module.exports = Header;

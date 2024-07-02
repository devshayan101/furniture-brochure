const Footer = () => {
	return (
		<footer className="responsive-container mx-auto mt-12" style={{ width: '90vw', maxWidth: '90%' }}>
			<div className="glass-card rounded-lg shadow-lg p-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<img src="img/logo.png" alt="Company Logo" className="h-12" />
						<p className="text-sm text-gray-400">Transform your space into a haven of comfort and style with our expert interior design services.</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-orange-500" style={{ textShadow: '0 0 1px rgba(209, 213, 219, 0.5), 0 0 1px rgba(209, 213, 219, 0.5), 0 0 1px rgba(209, 213, 219, 0.5)' }}>
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<a href="index.html" className="text-gray-400 hover:text-orange-500">
									Home
								</a>
							</li>
							<li>
								<a href="about-us.html" className="text-gray-400 hover:text-orange-500">
									About Us
								</a>
							</li>
							<li>
								<a href="products.html" className="text-gray-400 hover:text-orange-500">
									Products
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-orange-500">
									Services
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-orange-500">Contact Us</h3>
						<ul className="space-y-2">
							<li className="flex items-center text-gray-400">
								<i className="fas fa-map-marker-alt mr-2 text-orange-500"></i> 123 Design Street, Creative City
							</li>
							<li className="flex items-center text-gray-400">
								<i className="fas fa-phone mr-2 text-orange-500"></i> +1 (555) 123-4567
							</li>
							<li className="flex items-center text-gray-400">
								<i className="fas fa-envelope mr-2 text-orange-500"></i> info@yourdesign.com
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-orange-500">Follow Us</h3>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-orange-500">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-orange-500">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-orange-500">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-orange-500">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
					<p>&copy; 2023 Your Design Company. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
module.exports = Footer;

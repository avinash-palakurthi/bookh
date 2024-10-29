const Navbar = () => {
	return (
		<div className="w-full flex items-center justify-between shadow-lg p-2  ">
			<div>
				<p className="text-xl md:text-3xl font-semibold text-orange-400 px-5">
					Bookh
				</p>
			</div>

			{/* avatar & name*/}
			<div className="flex items-center px-5 gap-4">
				<div className="avatar">
					<div className="w-10 rounded-full">
						<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
					</div>
				</div>
				<p>Alisa </p>
			</div>
		</div>
	);
};

export default Navbar;

import food from "../../assets/food.jpg";

const TopSection = () => {
	return (
		<div className="relative w-full">
			{/* Image Container */}
			<img
				className="w-full h-40 sm:h-60 md:h-72 lg:h-96 object-cover"
				src={food}
				alt="food"
			/>
			{/* Overlay text */}
			<div className="absolute inset-0 flex items-center justify-center  bg-gray-800 bg-opacity-55">
				<p className="text-orange-500  pt-24 text-center md:pt-64 text-sm text-wrap md:text-4xl uppercase duration-300  font-bold opacity-90">
					The flavours come from the culture of nature
				</p>
			</div>
		</div>
	);
};

export default TopSection;

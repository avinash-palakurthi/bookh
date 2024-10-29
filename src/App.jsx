import Navbar from "./components/navbar/Navbar";
import Restaurant from "./components/section/Restaurant";
import TopSection from "./components/section/TopSection";

function App() {
	return (
		<div className="">
			<Navbar />
			<TopSection />
			<div className="flex flex-wrap items-center justify-around gap-5">
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
			</div>
		</div>
	);
}

export default App;

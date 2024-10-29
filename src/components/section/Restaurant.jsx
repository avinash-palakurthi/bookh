import curry from "../../assets/curry1.avif";
const Restaurant = () => {
	return (
		<div className="card bg-base-100 w-96 shadow-xl pt-3 ">
			<figure>
				<img className="h-80 w-72" src={curry} alt="curry" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Butter-Chicken</h2>
				<p>
					A classic Indian chicken dish with a rich and creamy tomato-based
					gravy.
				</p>
				<div className="card-actions justify-between px-5">
					<button className="btn bg-orange-300">Order Now</button>
					<button
						className="btn bg-red-400"
						onClick={() => document.getElementById("my_modal_1").showModal()}
					>
						Quantity
					</button>
					<dialog id="my_modal_1" className="modal">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Create Your Own </h3>
							<p className="py-4 font-semibold">
								As per your requirement you can order it!!
							</p>
							<div className="modal-action">
								<form method="dialog">
									{/* if there is a button in form, it will close the modal */}
									<div className="form-control px-36">
										<label className="label cursor-pointer ">
											<span className="label-text">200 gm chicken</span>
											<span className="label-text">200 gm gravey</span>

											<input
												type="radio"
												name="radio-10"
												className="radio checked:bg-red-500"
												defaultChecked
											/>
										</label>
										<label className="label cursor-pointer ">
											<span className="label-text">400 gm chicken</span>
											<span className="label-text">400 gm gravey</span>

											<input
												type="radio"
												name="radio-10"
												className="radio checked:bg-red-500"
												defaultChecked
											/>
										</label>
									</div>
									<button className="btn bg-red-700 text-white">Close</button>
								</form>
							</div>
						</div>
					</dialog>
				</div>
			</div>
		</div>
	);
};

export default Restaurant;

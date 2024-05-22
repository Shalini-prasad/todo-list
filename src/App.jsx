let row = `flex flex-wrap justify-between`;

function App() {
	return (
		<div className="container-fluid h-screen relative">
			<div className="bg-custom-image bg-cover bg-top-center bg-no-repeat min-h-60 sm:bg-custom-image-desktop">
				Hii
			</div>
			<div className=" dark:bg-black min-h-full bg-very-light-gray ">
				<div className="container max-w-4xl ml-auto mr-auto bg-slate-500 absolute">
					<div className={`${row} px-3 py-10`}>
						<h1>TODO</h1>
						<div>+</div>
					</div>
					<div className={`${row} px-3 py-10 mb-`}>
						<input type="text " className="w-full px-6 py-2" />
					</div>
					<div className="rounded-md border-red-50 overflow-hidden">
						<div
							className={`${row} px-8 py-4 bg-white  text-black`}
						>
							<p>5 items left</p>
							<div className={`${row} gap-3`}>
								<p>All</p>
								<p>Active</p>
								<p>Completed</p>
							</div>
							<p>Clear Completed</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

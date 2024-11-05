import introPic from '../assets/images/introPic.png';

const home = () => {
    return (
        <div className="home flex flex-col">

					{/* intro */}
					<div className="flex items-center gap-28 justify-center mt-10">

						<div className="text-center">
							<h1 className="text-6xl font-jomolhari font-normal leading-[5.8rem] text-[#444444]">CUISINE<br/>CRAFTED<br/>WITH CARE</h1>
						</div>

						<div className="w-[25rem] h-auto">
							<img className="size-full object-cover" src={introPic}></img>
						</div>

					</div>
					{/* intro */}
            
        </div>
    )
}

export default home
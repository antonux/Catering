// import mvPic from '../assets/images/mvPic.png';

// components
import IntroHome from '../components/homeIntro'
import MissionVission from '../components/homeMissionVission'
import MenuHome from '../components/homeMenu'

const home = () => {
	return (
		<div className="flex flex-col items-center pb-32">
			{/* intro */}
				<IntroHome />
			{/* intro */}

			{/* Mission Vission */}
				<MissionVission />
			{/* Mission Vission */}

			{/* Menu */}
				<MenuHome />
			{/* Menu */}
		</div>
	)
}

export default home
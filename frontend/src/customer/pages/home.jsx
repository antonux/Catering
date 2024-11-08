// import mvPic from '../assets/images/mvPic.png';

// components
import IntroHome from '../components/introHome'
import MissionVission from '../components/missionVisionHome'
import MenuHome from '../components/menuHome'

const home = () => {
	return (
		<div className="home flex flex-col items-center pb-32">
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
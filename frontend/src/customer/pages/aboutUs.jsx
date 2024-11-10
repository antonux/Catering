
import TheTeam from '../components/aboutTheTeam'
import OurMission from '../components/aboutMission'
import OurArt from '../components/aboutArt'



const aboutUs = () => {
	return (
		<div className="flex flex-col items-center mt-16">
			{/* the team */}
			<TheTeam />
			{/* the team */}

			{/* our mission */}
			<OurMission />
			{/* our mission */}

			{/* our art */}
			<OurArt />
			{/* our art */}
		</div>
	)
}

export default aboutUs
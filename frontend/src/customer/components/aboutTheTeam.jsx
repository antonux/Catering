import teamPic from '../assets/images/teamPic.png'
import teamPic2 from '../assets/images/teamPic2.png'

const theTeam = () => {
  return (
    <div className="team flex gap-10 items-center justify-center">
      <div className="relative pr-[11.5rem]">
        <img className="z-40 relative" src={teamPic}></img>
        <img className="z-10 absolute h-[14rem] top-14 right-0" src={teamPic2}></img>
      </div>
      <div className="relative teamtext">
        <h1 className="relative text-4xl pl-14 lg:text-6xl font-sail font-normal text-[#222222]">
          The team
        </h1>
        <div className="absolute w-[2px] h-12 top-2 left-9 bg-black"></div>
        <p className='bg-[#ffffff33] shadow-md p-5 pt-4 text-justify text-[#361f10]
					 font-roboto font-light w-[20rem] text-sm md:text-lg h-auto md:leading-7 md:w-[28rem] rounded-lg'>
          At Virtucio Caterers, we are more than
          just a catering company - we are a team
          dedicated to crafting unforgettable
          culinary experiences. With a passion for
          excellence and a commitment to exceeding
          expectations, our team brings together
          a blend of creativity, expertise, and
          dedication to every event we cater.
        </p>
      </div>
    </div>
  )
}

export default theTeam
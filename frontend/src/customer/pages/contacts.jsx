import Boxes from '../components/contactsBoxes'


const contacts = () => {
  return (

    <div className="flex flex-col items-center gap-24">
      <div className="flex flex-col items-center">
        <h1 className="mt-20 text-[3.3rem] font-sail font-normal text-[#222222]">
          Contact Us
        </h1>
        <p className="tracking-wide font-roboto font-light text-xl">Have any questions? We'd love to hear from you.</p>
      </div>

      {/* 3 cards */}
      <Boxes />
      {/* 3 cards */}

    </div>

  )
}

export default contacts
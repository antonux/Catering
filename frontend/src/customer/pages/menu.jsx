import React, { useState } from 'react';

import SideNavbar from '../components/menuNavbar'
import MenuComponent from '../components/menuMenu'

const Menu = () => {

  // State for selected filter
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="font-roboto menu flex justify-center gap-[19rem] mt-20">

      {/* side navbar */}
      <SideNavbar setSelectedFilter={setSelectedFilter} />
      {/* side navbar */}

      {/* menu */}
      <MenuComponent selectedFilter={selectedFilter} />
      {/* menu */}

    </div >
  )
}

export default Menu
import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import SideNavbar from '../components/menuNavbar'
import MenuComponent from '../components/menuMenu'


const Menu = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  let location = useLocation(); 

  useEffect(() => {
    if (location.state && location.state.filter) {
      let filter = location.state.filter
      setSelectedFilter(filter)
    }
  }, [location.state]);

  return (
    <div className="font-roboto menu flex justify-center gap-[19rem] mt-20">

      {/* side navbar */}
      <SideNavbar setSelectedFilter={setSelectedFilter} passFilter={selectedFilter}/>
      {/* side navbar */}

      {/* menu */}
      <MenuComponent selectedFilter={selectedFilter} />
      {/* menu */}

    </div >
  )
}

export default Menu
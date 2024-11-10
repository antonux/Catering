import React from 'react';

const SideNavbar = ({ setSelectedFilter }) => {
  return (
    <div className="nav-container">
      <div className="fixed">
        <nav className="flex flex-col items-start gap-3">
          <button onClick={() => setSelectedFilter("all")}>All</button>
          <button onClick={() => setSelectedFilter("main-entree")}>Main Entree</button>
          <div className="flex flex-col items-start gap-3 pl-5">
            <button onClick={() => setSelectedFilter("pork")}>Pork Dishes</button>
            <button onClick={() => setSelectedFilter("poultry")}>Poultry Dishes</button>
            <button onClick={() => setSelectedFilter("beef")}>Beef Dishes</button>
            <button onClick={() => setSelectedFilter("vegetable")}>Vegetable Dishes</button>
          </div>
          <button onClick={() => setSelectedFilter("soup")}>Soup</button>
          <button onClick={() => setSelectedFilter("dessert")}>Dessert/Salad</button>
        </nav>

      </div>
    </div>
  );
}

export default SideNavbar;
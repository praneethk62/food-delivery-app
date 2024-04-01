import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Explore a diverse culinary selection on our menu, boasting fresh
        flavors, delightful textures, and irresistible creations crafted to
        please every palate, ensuring a memorable dining experience for all
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu
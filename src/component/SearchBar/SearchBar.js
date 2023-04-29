import React from 'react'
import "./SearchBar.css";
import add from "../../assets/searchbar/Icon Indicator.png";
import calender from "../../assets/searchbar/calendar.png";
import notification from "../../assets/searchbar/layout-grid.png";
import user from "../../assets/searchbar/Paste image.png";
import find from "../../assets/searchbar/search.png";

function SearchBar() {
  return (
   <div className='container'>

        <div className='searchBarCover'>
            <div className='searchContainerBox'>
                <img src={find} alt = "find" className='images' />
                <input className='searchBar' placeholder = "Search..." type = "text" name = "search" id = "search" />
            </div>
        </div>

        <div className='boxes'>
         <a href = "#"><img src={add} alt = "add" className='images' /></a>
         <a href = "#"><img src={calender} alt = "calender" className='images'/></a>
         <a href = "#"><img src={notification} alt = "notification" className='images'/></a>
         <a href = "#"><img src={user} alt = "user" height={40} width={40}/></a>
        </div>
   </div>

  )
}

export default SearchBar
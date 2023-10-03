import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const header = () => {
  
  return (
    <nav class='navbar' 
    data-target='top__header bottom__header' 
    aria-controls='navbar' 
    aria-label='navigation'
    >
      {/** top header */}
      <header class='top__layer' aria-label='header' aria-controls='top'>
        {/** left logo */}
        <div class='nav__logo'>
          <Link to='/'> {/** same as <a href='/'></a> */}
            <img 
            class='logo' 
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
            alt='_error' 
            />
          </Link>
        </div>
        {/** search box */}
        <div class='input__field search-box'>
          <input type='text' class='field' placeholder='Search Amazon' />
          {/** search icon */}
          <div class='search__icon'>
            <i class='bx bx-search'></i>
          </div>
        </div>
      </header>
      
      {/** links */}
      {/** basket card */}
    </nav>
  )
}

export default header;

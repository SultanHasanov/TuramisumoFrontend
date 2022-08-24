import React from 'react'
import { Link } from 'react-router-dom'
import sun from './sun.png'
import '../../scss/header/header.scss'

document.onscroll = () => {
  const scrollTopPosition = document.documentElement.scrollTop
  const header = document.querySelector('header')
  const blockImg = document.querySelector('#block_img')

  scrollTopPosition === 0
    ? (header.classList = 'header')
    : (header.classList = 'headers')
  scrollTopPosition === 0
    ? (blockImg.classList = 'block_img')
    : (blockImg.classList = 'block_img_end')
}

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav_block'>
          <li>
            <Link to='#'>HOME</Link>
          </li>
          <li>
            <Link to='#'>PAGES</Link>
          </li>
          <li>
            <Link to='#'>BOOKING</Link>
          </li>
        </ul>

        <div id='block_img' className='block_img'>
          <img className='img' src={sun} alt='' />
        </div>

        <ul className='nav_block'>
          <li>
            <Link to='#'>FACILITIES</Link>
          </li>
          <li>
            <Link to='#'>BLOG</Link>
          </li>
          <li>
            <Link to='#'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

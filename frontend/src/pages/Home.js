
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <Slider />
    </div>
  )
}

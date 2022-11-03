
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
export const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <Slider />
        <Footer />
    </div>
  )
}

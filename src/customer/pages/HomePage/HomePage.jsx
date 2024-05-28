import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import Navigation from '../../components/Navigation/Navigation'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { men_kurta } from "../../../Data/men_kurta";
const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='flex flex-col justify-center py-20 space-y-10'>
        <HomeSectionCarosel data={men_kurta} sectionName={"Men's Kurta"}/>     
        <HomeSectionCarosel data={men_kurta} sectionName={"Men's Shoes"}/>     
        <HomeSectionCarosel data={men_kurta} sectionName={"Men's Watches"}/>     
        <HomeSectionCarosel data={men_kurta} sectionName={"Women's Kurta"}/>     
        </div>
         
    </div>
  )
}

export default HomePage
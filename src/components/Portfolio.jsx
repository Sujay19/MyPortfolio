import React from 'react'
import  QtripStatic from "../assets/portfolio/QtripStatic.png"
import  QKart from "../assets/portfolio/QKart.png"
import  QtripDynamic from "../assets/portfolio/QtripDynamic.png"
import  NewsFeed from "../assets/portfolio/NewsFeed.png"
import PortfolioImg from "../assets/portfolio/PortfolioImg.png"
import Krypt from "../assets/portfolio/Krypt.png"

import  usestate from "../assets/portfolio/usestate.jpg"
import { Button, Link } from 'react-scroll'

const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:QtripStatic,
            href: "https://itachi-qtrip.netlify.app/"
        },
        {
            id:2,
            src:QKart,
            href:"https://sujayyqtrip-frontend.netlify.app/"
        },
        {
            id:3,
            src:QtripDynamic,
            href:"https://sujayqtrip-dynamic-frontend.netlify.app/"
        },
        {
            id:4,
            src:NewsFeed,
            href:"https://sujayxboard.netlify.app/#"
        },
        {
            id:5,
            src:PortfolioImg
        },
        {
            id:6,
            src: Krypt,
            href:"https://sujaykrypt.netlify.app/"
        }
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 first-letter:sm:px-0'>
            {
                portfolios.map(({id,src,href})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img 
                    src={src} 
                    alt='project'
                    className='rounded-md duration-200 hover:scale-105' />
                     <div className='flex items-center justify-center'>
                        <a href={href}>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
                        </a>   
                     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code </button>
                     </div>
                   </div>
                ))
            }
             {/* */}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
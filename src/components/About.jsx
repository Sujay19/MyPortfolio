import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Welocome!
            </p>
            <br/>
            <p className='text-xl mt-20'>
                Every person has a unique story.Here is a glimpse into mine.
            </p>
            <br/>
            <p className='text-xl'>
                My name is Sujay G R  I have graduated from JSS Science and Technology University(SJCE), Mysore, Karnataka. I have a completed several courses regarding MERN stack Web development in the current working organization and in an external platform as well to upskill myself in various full stack topics.
            </p>
        </div>
    </div>
  )
}

export default About
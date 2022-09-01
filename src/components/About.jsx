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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odio blanditiis esse quia id, illum, repellat tenetur labore ducimus voluptatem sapiente rerum. Harum consectetur amet in perspiciatis obcaecati fugiat nesciunt.
            </p>
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sunt repellendus necessitatibus suscipit perspiciatis omnis porro libero tenetur saepe asperiores rerum iure at nesciunt voluptatibus unde sit eos itaque explicabo vitae, molestias non laboriosam repellat similique. Assumenda, similique a minus dolores illo at eum nam dolor quae perspiciatis, iusto ex.
            </p>
        </div>
    </div>
  )
}

export default About
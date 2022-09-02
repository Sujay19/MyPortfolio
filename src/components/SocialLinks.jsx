import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
function SocialLinks() {
    const Links=[
        {
            id:1,
            child:(
                <>
                 LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/sujay-g-r-007a7b181',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                 Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Sujay19',
        },
        {
            id:3,
            child:(
                <>
                 Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:sujaysavanthd4@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                 Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.docx',
            style:'rounded-br-md',
            download:false
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {
                Links.map(({id,child,href,style,download})=>(
                <li 
                key={id}
                className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 bg-gray-500"+" "+style}>
                <a 
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer">
                   {child}
                </a>
                </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialLinks
import React from 'react'
import {Link} from  'react-router-dom'


const Button = ({children, active, linkto}) => {
  return (
    <div>
        <Link to={linkto}>

                <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold text-[17px] shadow-md shadow-richblack-500
                    ${active ? "btn text-black" : "bg-richblack-800"}
                    hover:scale-95 transition-all duration-200
                `}>
                    {children}
                </div>


        </Link>
    </div>
  )
}

export default Button
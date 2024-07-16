import React from 'react'

export const Navbar =()=>{
    return(
        
            <div className="flex justify-between items-center bg-black text-white p-3 rounded-b-xl w-screen">
                <div className="hover:cursor-pointer">
                    <p className="w-8 h-0.5 bg-white mb-2"></p>
                    <p className="w-8 h-0.5 bg-white mb-2"></p>
                    <p className="w-8 h-0.5 bg-white"></p>
                </div>
                <div className="flex items-center ">
                    <p className="mr-2">Profile</p>
                    <p className="mr-2">About</p>
                    <p>Account</p>
                </div>
            </div>
    
    )
}

export default Navbar;
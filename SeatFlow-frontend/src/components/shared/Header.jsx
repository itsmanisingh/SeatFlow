import seatFlowLogo from "../../assets/seatflow-logo-light.png"
import { FaSearch } from "react-icons/fa"

const Header = () => {
    return (
        <div className='w-full text-sm bg-white'>
            {/* Top Navbar */}
            <div className='px-4 md:px-8'>
                <div className='max-w-screen-xl mx-auto flex            justify-between items-center py-3'>
                    {/* Left Part */}
                    <div className='flex items-center space-x-4'>
                        <img src={seatFlowLogo} alt="logo" className='h-8 object-contain cursor-pointer' />
                    
                        <div className='relative'>
                            <input
                                type="text"
                                placeholder="Search For Movies, Events, Plays, Sports and Activities"
                                className="border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none"
                            />
                            <FaSearch className="absolute right-2 top-2.5 text-gray-500" />
                        </div>
                    </div>
                    {/* Right Part */}
                    <div className="flex item-center space-x-6">
                        <div className="text-sm font-medium cursor-pointer">
                            West Bengal &nbsp; 
                        </div>
                        <button className="bg-[#f84464] cursor-pointer text-white px-4 py-1.5 rounded text-sm">
                            Sign in
                        </button>
                    </div>
                </div>

            </div>
            {/* Bottom Navbar */}
        </div>
    )
}

export default Header
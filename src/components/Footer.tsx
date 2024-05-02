import logo from "../assets/logos/deepsify-black.png"
import { FaMedium, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

export const Footer = () => {
    return (
        <>
            <hr className='border-gray-600 border-opacity-50' />
            <div className='max-w-[1120px] mx-auto pt-16 px-10'>
                <div className='max-md:space-y-5 md:flex pb-12 md:pb-24'>
                    <div className='md:w-1/3 sm_laptop:w-1/2 space-y-8'>
                        <div className='flex items-center gap-x-3'>
                            <img className='w-10' src={logo} alt="Logo" />
                            <h3 className='text-2xl font-medium italic'>Deepsify</h3>
                        </div>
                        <div className="text-gray-500 flex items-center gap-x-5 max-md:hidden">
                            <FaTwitter size={30} />
                            <FaInstagram size={30} />
                            <FaTiktok size={30} />
                            <FaMedium size={30} />
                        </div>
                        <div className="text-gray-500 flex items-center gap-x-5 md:hidden">
                            <FaTwitter size={25} />
                            <FaInstagram size={25} />
                            <FaTiktok size={25} />
                            <FaMedium size={25} />
                        </div>
                    </div>
                    <div className='md:w-2/3 sm_laptop:w-1/2 md:flex justify-between max-md:space-y-5 max-md:text-sm'>
                        <ul className="text-gray-300 space-y-4 flex-1">
                            <li className="text-gray-500 font-medium md:pb-4 pt-2 cursor-default">Tools</li>
                            <li>Merge Video</li>
                            <li>Cut Video</li>
                            <li>GIF-Maker</li>
                        </ul>
                        <ul className="text-gray-300 space-y-4 flex-1">
                            <li className="text-gray-500 font-medium md:pb-4 pt-2 cursor-default">About</li>
                            <li>Pricing</li>
                            <li>Features</li>
                            <li>About Us</li>
                        </ul>
                        <ul className="text-gray-300 space-y-4 flex-1">
                            <li className="text-gray-500 font-medium md:pb-4 pt-2 cursor-default">Contact</li>
                            <li className="cursor-default">725-446-0572</li>
                            <li className="cursor-default">324 Feest Locks Apt. 703, Danielmouth</li>
                            <li className="cursor-default">deepsify@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="font-medium text-gray-500 pb-5 flex max-md:flex-col max-md:items-center max-md:gap-y-2 md:justify-between items-center max-mdtext-xs">
                    <p>Deepsify© All rights reserved</p>
                    <div className="md:w-2/5 sm_laptop:w-1/3 flex items-center gap-x-5 md:gap-x-10 sm_laptop:gap-x-20">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

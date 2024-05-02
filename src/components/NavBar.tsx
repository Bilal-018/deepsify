import { useNavigate } from 'react-router-dom';
import logo from "../assets/logos/deepsify-black.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {isMenuOpen && (
                <div className='bg-black bg-opacity-90 backdrop-blur-sm absolute w-screen h-screen top-0 left-0 z-50 p-6'>
                    <div className='flex justify-end'>
                        <button onClick={closeMenu}>
                            <IoClose size={22} />
                        </button>
                    </div>

                    <div className='mt-10 space-y-10 flex flex-col items-center'>
                        <ul className='text-gray-300 space-y-4 text-center'>
                            <li>Pricing</li>
                            <li>Features</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>

                        <button className='bg-blue-500 py-2 px-8 rounded-xl w-1/2 mx-auto' onClick={goToLogin}>Login</button>
                    </div>
                </div>
            )}

            <div className='flex items-center justify-between py-5 w-full'>
                <div className='flex items-center gap-x-1 md:gap-x-3'>
                    <img className='w-8 md:w-10' src={logo} alt="Logo" />
                    <h3 className='md:text-2xl font-medium italic'>Deepsify</h3>
                </div>

                <ul className='hidden md:flex items-center md:gap-x-6 sm_laptop:gap-x-12 text-sm text-gray-300'>
                    <li>Pricing</li>
                    <li>Features</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>

                <button className='bg-blue-500 md:py-2 sm_laptop:py-3 px-8 rounded-xl max-md:hidden' onClick={goToLogin}>Login</button>

                <button className='md:hidden' onClick={openMenu}>
                    <RxHamburgerMenu size={22} />
                </button>
            </div>
        </>
    )
}

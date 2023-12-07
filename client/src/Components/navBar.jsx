import { MdMenu } from "react-icons/md";
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import logo from '../assets/mainlogo.png'
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <div className="h-[6.5rem] bg-[#0f0f0f] text-white flex justify-between xl:justify-center xl:gap-[300px] 2xl:gap-[500px] items-center px-4 lg:px-8">
                <div className="flex">
                    <img src={logo} alt="logo" className="h-14 w-full" />
                    <div className="flex items-center flex-col text-left">
                        <h1 className="text-3xl font-Kalam font-bold">Together</h1>
                        <p className="flex text-sm text-start w-full ml-3 font-Pacifico text-[#84c54e]">Shared. Cares</p>
                    </div>
                </div>

                <div className="hidden lg:flex gap-8 items-center ">
                    <ul className="socials flex gap-2.5">
                        <li className="flex justify-center rounded-full h-10 w-10 bg-[#55acee] items-center hover:border-2 hover:border-[#55acee] hover:bg-transparent hover:text-[#55acee]" ><FaXTwitter className="text-lg "></FaXTwitter></li>
                        <li className="flex justify-center rounded-full h-10 w-10 bg-[#3b5998] items-center hover:border-2 hover:border-[#3b5998] hover:bg-transparent hover:text-[#3b5998]"><FaFacebookF className="text-lg "></FaFacebookF></li>
                        <li className="flex justify-center rounded-full h-10 w-10 bg-[#e52d27] items-center hover:border-2 hover:border-[#e52d27] hover:bg-transparent hover:text-[#e52d27]"><TfiYoutube className="text-lg "></TfiYoutube></li>
                        <li className="flex justify-center rounded-full h-10 w-10 border-2 text-[#acb4b6] border-[#acb4b6] items-center hover:border-2 hover:border-[#84c54e] hover:bg-transparent hover:text-[#84c54e]"><FaPinterestP className="text-lg "></FaPinterestP></li>

                    </ul>
                    <div className="flex items-center ">
                        <div className=" flex items-center justify-center font-bold btn-sm h-11 w-[120px] bg-[#84c54e] hover:bg-[#ff6900] mr-2.5 border-none rounded">DONATE</div>
                        <div className="bg-[#ffe400] flex items-center justify-center font-bold btn-sm h-11 w-[200px] text-[#0f0f0f] hover:text-white hover:bg-[#ff6900] mr-2 border-none rounded">BECOME A VOLUNTEER</div>
                    </div>

                </div>

                <div className="lg:hidden">
                    <Drawer></Drawer>
                </div>
            </div>
            <div className="hidden lg:flex w-full">
                <NavItems></NavItems>
            </div>

        </div>
    );
};

const Drawer = () => {
    return (
        <div className="z-40 drawer ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn-sm drawer-button">
                    <MdMenu className="my-drawer drawer-button text-[26px] text-white text-4xl hover:text-[#84c54e]"></MdMenu>
                </label>
                
            </div>
            
            <div className="drawer-side mt-[6.5rem] md:mt-0 ">
                {/* <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className=""
                ></label> */}
                <div className="menu p-0 w-full min-h-full md:w-[38%] text-base-content bg-[#84c54e]">
                    <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className=""
                >
                    <NavItems></NavItems>

                </label>
                  
                    {/* <NavItems></NavItems> */}
                </div>
            </div>
        </div>
    );
};

const NavItems = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('home');

    const tabs = [
        { id: 'home', label: 'Home', url_path: '/' },
        { id: 'events', label: 'events', url_path: '/events' },
        { id: 'about-us', label: 'about us', url_path: '/about-us' },
        { id: 'our-causes', label: 'our causes', url_path: '/our-causes' },
        { id: 'contacts', label: 'Contacts', url_path: '/contacts' },

    ];

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('home');
        } else if (location.pathname === '/events') {
            setActiveTab('events');
        } else if (location.pathname === '/about-us') {
            setActiveTab('about-us');
        } else if (location.pathname === '/our-causes') {
            setActiveTab('our-causes');
        } else if (location.pathname === '/contacts') {
            setActiveTab('contacts');
        }
    }, [location]);


    return (
        <ul className="uppercase lg:flex lg:border-b lg:h-16 lg:w-full lg:items-center lg:justify-start lg:gap-14 lg:pl-[2rem] xl:pl-[7rem] 2xl:pl-[21rem]">
            {tabs.map((tab) => (
                <NavLink
                    to={tab.url_path}
                    key={tab.id}
                    className={`relative h-14 border-b pl-4 border-opacity-10 hover:bg-opacity-10 hover:bg-[#333] border-black flex items-center text-white font-bold lg:text-[#333] lg:text-sm lg:items-center lg:justify-center lg:border-none lg:hover:text-[#84c54e] lg:p-0 lg:h-0 ${activeTab === tab.id ? 'group-hover:block lg:text-[#84c54e] active' : ''
                        }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                    {activeTab === tab.id && (
                        <div className="absolute inset-0 bg-black opacity-20 rounded-none"></div>
                    )}
                </NavLink>
            ))}
        </ul>

    );

}

export default NavBar;

//TODO:FIX THE NAVBAR: WHEN THE DRAWER OPENS THE PAGE BEHIND SHOULDNT BE SCROLLABLE
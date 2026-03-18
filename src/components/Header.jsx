import { FaTiktok } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Tutup sidebar ketika route berubah
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Tutup sidebar ketika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
            <>
                  
      <header className="bg-black text-white p-4 flex items-center sticky top-0 z-50">
        <button onClick={toggleSidebar} className="text-2xl mr-4 cursor-pointer">
          ☰
        </button>

        <Link to="/" className="flex items-center">
          <FaTiktok className="mr-2 text-2xl" />
          <h1 className="text-xl font-bold flex">TokoTiki</h1>
        </Link>
      </header>

      
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300`}
      >
        <h2 className="text-xl font-bold p-4 border-b border-gray-600">
          Menu
        </h2>

        <ul className="p-4 space-y-3">
          <li className="">
            <Link to="/" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-3"><IoHome></IoHome>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-3"><SiAboutdotme className="text-3xl"></SiAboutdotme>
              About
            </Link>
          </li>

          <li>
            <Link to="/search" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-3"><IoSearch></IoSearch>
              Search
            </Link>
          </li>
        </ul>
      </div>
          {/* <aside className='hidden lg:flex w-64 px-6 py-6 flex-col sticky top-0 h-screen overflow-hidden shadow-md'>
            <div className='flex-col flex gap-6'>
              <h1 className='text-4xl font-bold mb-10 flex cursor-pointer items-center'><FaTiktok className='mr-2'/>TikiToko</h1>
              <ul className='menu gap-3 text-base '>
                <li><a href="" className="flex items-center gap-3"><IoHome />Home</a></li>
                <li><a href="" className="flex items-center gap-3"><SiAboutdotme className='text-5xl'/>About Me</a></li>
                <li><a href="" className="flex items-center gap-3"><IoSearch />Search</a></li>
              </ul>
         </div>
          </aside>
          <aside className="hidden md:flex lg:hidden w-20 shadow-md flex-col items-center py-6 gap-8 sticky top-0 h-screen overflow-hidden">
            <IoHome className="text-2xl cursor-pointer"></IoHome>
            <SiAboutdotme className="text-4xl cursor-pointer"></SiAboutdotme>
            <IoSearch className="text-2xl cursor-pointer"></IoSearch>
          </aside>
          <nav className='fixed bottom-0 left-0 right-0 bg-base-300 flex justify-around py-3 md:hidden items-center'>
                  <IoHome className='text-xl cursor-pointer'></IoHome>
                  <SiAboutdotme className='text-5xl cursor-pointer'></SiAboutdotme>
                  <IoSearch className='text-xl cursor-pointer'></IoSearch>
                </nav> */}
          </>
  )
}

export default Header
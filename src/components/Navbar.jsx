import React from 'react'

const Navbar = () => {

  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About ", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  return (
    <nav className={` w-full left-0 top-0 z-[999] bg-gray-900 `}>
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <span className='text-white'>Reneta Citra Indah Kirana</span>
        </div>
        <div className={`  text-white md:block hidden px-7 py-2 `}>
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-[#7562E0]">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
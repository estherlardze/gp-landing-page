import React, { useState } from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md' 

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="relative ">
      <button
        className="flex items-center font-semibold"
        onClick={toggleDropdown}
      >
         Dropdown
        <span><RiArrowDownSLine size={20}/></span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md">
          <ul className="py-2 text-black w-[180px]">
            <li className="px-4 py-2 hover:bg-yellow">Drop Down 1</li>
            <li className="px-4 py-2 hover:bg-yellow">
              <button
                className="focus:outline-none flex justify-between items-center"
                onClick={toggleSubmenu}
              >
                Deep Drop down
                <span><MdOutlineKeyboardArrowRight size={20}/></span>
              </button>
              {isSubmenuOpen && (
                <ul className="z-10 absolute right-[150px] w-[200px] bg-white rounded-md shadow-md py-2">
                  <li className="px-4 py-2 hover:bg-yellow"> Deep Drop down 1</li>
                  <li className="px-4 py-2 hover:bg-yellow"> Deep Drop down 2</li>
                  <li className="px-4 py-2 hover:bg-yellow"> Deep Drop down 3</li>
                  <li className="px-4 py-2 hover:bg-yellow"> Deep Drop down 4</li>
                  <li className="px-4 py-2 hover:bg-yellow"> Deep Drop down 5</li>

                </ul>
              )}
            </li>
            <li className="px-4 py-2 hover:bg-yellow">Drop Down 2</li>
            <li className="px-4 py-2 hover:bg-yellow">Drop Down 3</li>
            <li className="px-4 py-2 hover:bg-yellow">Drop Down 4</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
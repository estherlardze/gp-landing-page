import React from 'react'


const listStyle = 'py-2 cursor-pointer hover:bg-yellow transition-all ease-in-out duration-500 pl-3'
const listContainer = 'w-[170px] bg-white rounded-md absolute right-[160px] text-black py-2 mt-4 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 z-20 shadow-lg'
const Deepdrop = () => {
  return (
    <div>
        <ul className={listContainer}>
        <li className={listStyle}>Drop Down 1</li>
        <li className={listStyle}>drop drop 2 </li>
        <li className={listStyle}>Drop Down 2</li>
        <li className={listStyle}>Drop Down 3</li>
        <li className={listStyle}>Drop Down 4</li>
      </ul>
    </div>
  )
}

export default Deepdrop

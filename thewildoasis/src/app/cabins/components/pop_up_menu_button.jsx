import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiDuplicate } from "react-icons/hi";
import { MdModeEditOutline } from "react-icons/md";

export default function PopUpMenuButton({}) {
  const [open, toggleOpen] = useState(false);
  const showDialogBox = () => {
    toggleOpen(!open);
  };
  const handleOutsideClick=()=>{
    toggleOpen(false);
  }

  const onOutsideClick=(callback)=>{
    const modelRef = React.useRef();
    React.useEffect(()=>{
        const handleClick = (event) =>{
            if (modelRef.current && !modelRef.current.contains(event.target))
            toggleOpen(false)
        }
        document.addEventListener('click',handleClick, true);
        return ()=>{
            document.removeEventListener('click', handleClick, true)
        };
    },[modelRef])
    return modelRef;
  }


  const ref = onOutsideClick(handleOutsideClick)
  return (
    <div className="relative">
      <button onClick={showDialogBox} ref={ref}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5.5h.01M12 12h.01M12 18.5h.01"
          />
        </svg>
        {open == true ? (
          <div className="z-10 absolute right-3 flex flex-col items-start justify-start border border-grey-200 bg-white rounded">
            <li className="w-full hover:bg-gray-200 px-2  py-1 flex self-start items-center" onClick={()=>console.log("Duplicate")}>
              <HiDuplicate /> <p className="ml-1">Duplicate</p>
            </li>
            <li className="w-full hover:bg-gray-200 px-2  py-1 flex self-start items-center" onClick={()=>console.log("Edit ")}>
              <MdModeEditOutline /> <p className="ml-1" >Edit</p>
            </li>
            <li className="w-full hover:bg-gray-200 px-2  py-1 flex self-start items-center" onClick={()=>console.log("Delete")}>
              <MdDelete />
              <p className="ml-1">Delete</p>
            </li>
          </div>
        ) : (
          <div></div>
        )}
      </button>
    </div>
  );
}

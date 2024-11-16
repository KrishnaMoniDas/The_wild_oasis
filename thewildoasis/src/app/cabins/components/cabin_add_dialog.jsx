import React from "react";

export default function CabinAddDialog({ exit }) {
  const CustomBox = ({ title, isTextArea, type }) => {
    return (
      <div className="border-b-2 flex flex-row py-3 ">
        <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
          {title}
        </p>
        {isTextArea == false ? (
          <input type={type} className="px-4 py-2 border-2 rounded-md focus:outline-indigo-600" />
        ) : (
          <textarea className="px-4 py-2 border-2 rounded-md focus:outline-indigo-600"></textarea>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex align-middle justify-center bg-transparent absolute top-0 left-0 backdrop-blur-sm bg-blend-multiply">
      <div className=" relative flex flex-col self-center justify-self-center bg-white p-8 w-1/2 shadow-2xl rounded-sm">
        <button
          className="absolute top-2 right-5 hover:bg-gray-50"
          onClick={exit}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div>
          <CustomBox title={"Cabin's Name"} isTextArea={false} type={"text"} />
          <CustomBox title={"Maximum capacity"} isTextArea={false} type={"number"}/>
          <CustomBox title={"Regular price"} isTextArea={false} type={"number"} />
          <CustomBox title={"Discount"} isTextArea={false} type={"number"} />
          <CustomBox title={"Description for website"} isTextArea={true} />

          <div className="border-b-2 flex flex-row py-3 ">
            <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
              Cabin photo </p>
              <input type="file" name="" id="" className="file:bg-indigo-600 file:text-white file:border-0 file:px-3  file:py-2 file:rounded-md file:mr-3 file:cursor-pointer font-sans font-medium" />
          </div>
          <div className="flex align-middle justify-end p-3">
            <button className="border-2 border-gray-300 px-3 py-1 rounded-md font-sans font-normal" onClick={exit}>Cancel</button>
            <button className="border-0 bg-indigo-600 px-3 py-1 text-white font-sans font-medium ml-3 rounded-md" onClick={exit}>Create new cabin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

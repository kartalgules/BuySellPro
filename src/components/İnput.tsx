import React from "react";

const İnput = (props : {name : string}) => {

  return (
    <>
      <input className="bg-blue-300 rounded-md px-2 w-full h-8 text-center" id={`${props.name}`} type="text" onChange={(e) => console.log(typeof (e.target.value))}/>
    </>
  )
};

export default İnput;

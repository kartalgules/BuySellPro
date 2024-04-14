import React from "react";

const Desc = (props: { name: string }) => {
  return <p className="text-slate-500 font-bold w-full text-center">{props.name}</p>
};

export default Desc;
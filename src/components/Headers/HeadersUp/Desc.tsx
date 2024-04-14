const Desc = (props: { name: string ,for:string}) => {
  return <label htmlFor={`${props.for}`} className="text-slate-500 font-bold w-full text-center">{props.name}</label>
};

export default Desc;
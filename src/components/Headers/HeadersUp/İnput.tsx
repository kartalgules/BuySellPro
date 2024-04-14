const İnput = (props: { name: string, type: string }) => {
  return (
    <>
      <input className="bg-blue-300 rounded-md px-2 w-full h-2/5 text-center" min={0} id={`${props.name}`} type={`${props.type}`} />
    </>
  )
};

export default İnput;

const İnput = (props: { name: string, type: string }) => {
  return (
    <>
      <input className="bg-blue-300 rounded-md px-2 w-full h-8 text-center" id={`${props.name}`} type={`${props.type}`} />
    </>
  )
};

export default İnput;

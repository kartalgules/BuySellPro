import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const langHandleChance = async (e: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    let coise = e.target.value
    if (coise === "en") {
      await i18n.changeLanguage("en")
    } else {
      await i18n.changeLanguage("tr")
    }
  }
  // const currHandleChance = async (e: React.ChangeEvent<HTMLSelectElement>
  // ): Promise<void> => {
  //   let coise = e.target.value
  //   if (coise === "usd") {
  //     await i18n.changeLanguage("usd")
  //   } else {
  //     await i18n.changeLanguage("tl")
  //   }
  // }
  return (
    <div className="flex w-full h-12 md:h-16  bg-slate-100">

      <div className="flex w-2/12 ml-5 md:ml-10 items-center">
        <img className="w-9" src="../../assets/basket.png" alt="logo" />
        <h1 className="font-bold text-xs md:text-lg">BuySellPro</h1>
      </div>

      <div className="flex gap-2 font-semibold justify-end text-lg w-11/12 pr-2 md:pr-10 items-center h-full ">
        <select className="flex text-center bg-slate-300 hover:bg-slate-200 text-sm w-24 md:w-32 h-7 md:h-9 rounded-lg relative cursor-pointer" onChange={(e) => langHandleChance(e)}>
          <option value="tr">Turkish</option>
          <option value="en">English</option>
        </select>
        {/* <select className="flex text-center bg-slate-300 w-24 md:w-32 h-7 md:h-9 rounded-lg relative cursor-pointer" onChange={(e) => currHandleChance(e)}>
          <option value="tl">TL</option>
          <option value="usd">USD</option>
        </select> */}
      </div>

    </div>
  );
};

export default Navbar;
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import basket from "../../public/icons/Basket.png"
import { t } from "i18next";

const Navbar = () => {
  
  interface ILangProps {
    lang: string,
    content: string
  }
  
  const Lang = ({ lang, content }: ILangProps) => {
    const { i18n } = useTranslation();
    const langHandleChance = async (): Promise<void> => {
      lang && await i18n.changeLanguage(lang)
    }
    return (
      <li className="flex h-7 w-24 md:w-full p-2 md:p-4 cursor-pointer items-center hover:bg-slate-200 rounded-lg" data-lang={lang} onClick={langHandleChance}>
        <i className={`fi fi-${lang} text-md mr-2 rounded-lg`}></i>
        <span>{content}</span>
      </li>
    )
  }
 { /* LANGUAGE İCON ROTATE */}
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('#rotating-element')) {
      setIsRotated(false);
    }
  };

  useEffect(() => {
    if (isRotated) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isRotated]);

  return (
    <div className="flex w-full h-12 md:h-16 bg-slate-100">

      {/*  LOGO  */}
      <div className="flex w-11/12 ml-5 md:ml-10 items-center">
        <img className="w-7 mr-1" src={basket} alt="logo" />
        <h1 className="font-bold text-xs md:text-lg">BuySellPro</h1>
      </div>

      {/*  LANGUAGE SELECTION  */}
      <div className="w-32 text-xs md:text-sm my-2 md:my-3 mx-4 md:mx-8" id="rotating-element"  onClick={handleClick}>
        <div className="flex bg-slate-300 hover:bg-slate-200 font-semibold justify-around cursor-pointer py-2 px-3 text-md rounded-xl items-center">
          <span className="m-auto">{t('dil')}</span>
          <p className={`pl-1 text-slate-500 transform transition-transform duration-500 ${isRotated ? 'rotate-180' : ''}`} >v</p>
        </div>
        <ul className={`flex flex-col gap-2 relative mt-1 bg-slate-300 rounded-xl ${isRotated ? "block" : "hidden"}`}>
          <Lang lang="tr" content="Turkish" />
          <Lang lang="us" content="English" />
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
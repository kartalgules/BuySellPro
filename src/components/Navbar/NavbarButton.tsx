import { t } from 'i18next'
import { RiArrowDropDownLine } from 'react-icons/ri'

interface I18Props {
    lang : string,
    func : Function
}
const NavbarButton = ({lang ,func}:I18Props) => {
  return (
        <button className="flex justify-center items-center bg-slate-300 w-12 md:w-32 h-7 md:h-9 rounded-lg relative cursor-pointer" onClick={() => func()}>
          <span className="text-xs md:text-base w-3/4 text-center" >{t(`${lang}`)}</span>
          <RiArrowDropDownLine className="text-2xl" />
        </button>
  )
}

export default NavbarButton
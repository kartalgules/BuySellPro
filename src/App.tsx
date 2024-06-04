import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import LeftSection from "./components/LeftSection";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="h-full w-full flex flex-col xl:flex-row">
        <div className="h-1/2 w-full xl:w-6/12 flex flex-col">
          <LeftSection />
          <CurrencyConverter />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;

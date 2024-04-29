import LeftSection from "./components/LeftSection";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect (() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng)
  },[])

  return (
    <div  className="h-screen">
      <Navbar />
      <div className="h-full w-full flex flex-col xl:flex-row">
        <LeftSection />
        <Table />
      </div>
    </div>
  );
}

export default App;

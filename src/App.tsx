import LeftSection from "./components/LeftSection";
import Table from "./components/Table";

function App() {
  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col lg:flex-row ">
      <LeftSection />
      <Table />
    </div>
  );
}

export default App;

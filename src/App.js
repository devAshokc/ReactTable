import "./App.css";
// import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { Home } from "./components/Home";
import { PaginationTable } from "./components/PaginationTable";
import { SortingTable } from "./components/SortingTable";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Table/SortingTable" element={<SortingTable />} />
          <Route path="/Table/Filtering" element={<FilteringTable />} />
          <Route path="/Table/PaginationTable" element={<PaginationTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

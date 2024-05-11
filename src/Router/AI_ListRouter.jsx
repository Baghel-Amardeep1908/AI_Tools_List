import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIToolsList from "../Components/AI Tools List/AIToolsList";
import AIToolsHome from "../Components/AI Tools Home/AIToolsHome";
import AIToolsComparisonTable from "../Components/AI Tools Comparison/AIToolsComparisonTable";

const Routing = () => {
  return (
    <BrowserRouter basename="/AI-Tools-List/">
      <Routes>
        <Route path="/" Component={AIToolsHome} />
        <Route path="/home" Component={AIToolsList} />
        <Route
          path="/comparing-tools-table"
          Component={AIToolsComparisonTable}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

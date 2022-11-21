import React, { memo } from "react";
import Covid19 from "./pages/Covid19";
import Top from "./components/Top";
import { Routes, Route } from "react-router-dom";

const App = memo(() => {
  return (
    <div>
      <h1>Covid19 현황</h1>
      <hr />
      <Top />
      <Routes>
        <Route path="/covid19/*" element={<Covid19 />} />
      </Routes>
    </div>
  );
});

export default App;

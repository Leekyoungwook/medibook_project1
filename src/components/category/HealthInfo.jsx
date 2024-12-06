import React, { useState, useEffect } from "react";
import HealthNews from "../details/HealthNews";
import HealthList from "../details/HealthList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="news w-[70%] mt-10">
        <div className="news-main">
          <h2 className="text-3xl font-bold mb-4">NEWS</h2>
          <HealthNews />
        </div>
      </div>

      <div className="health mt-12 w-[70%] mb-14">
        <h2 className="text-3xl font-bold mb-4">건강정보</h2>
        <HealthList />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="h-screen bg-gray-700">
        <div className="h-full bg-slate-100 max-w-lg mx-auto rounded-3xl py-6 px-3">
          <SearchBar/>
        </div>
      </div>
    </>
  );
}

export default App;

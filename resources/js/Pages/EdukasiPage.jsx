import MessengerIcon from "@/Components/IconMessager";
import InformasiPertanian from "@/Components/InformationPertanian";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/SidebarEdukasi";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen fixed">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content Area (InformasiPertanian) */}
        <div className="flex-1 p-4 mt-10 overflow-y-auto"> {/* mt-10 untuk menurunkan konten */}
          <InformasiPertanian />
        </div>
      </div>
      
      {/* Messenger Icon */}
      <MessengerIcon />
    </div>
  );
};

export default App;

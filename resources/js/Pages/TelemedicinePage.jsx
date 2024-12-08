import MessengerIcon from "@/Components/IconMessager";
import InformasiTelemedicine from "@/Components/InformationTelemedicine";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/SidebarTelemedicine";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen fixed">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        
        <div className="flex-1 p-4 mt-10 overflow-y-auto"> 
          <InformasiTelemedicine />
        </div>
      </div>
      
      <MessengerIcon />
    </div>
  );
};

export default App;

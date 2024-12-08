import MessengerIcon from "@/Components/IconMessager";
import InformasiUMKM from "@/Components/InformationUMKM";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/SidebarUmkm";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen fixed">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        
        <div className="flex-1 p-4 mt-10 overflow-y-auto"> 
          <InformasiUMKM />
        </div>
      </div>
      
      <MessengerIcon />
    </div>
  );
};

export default App;

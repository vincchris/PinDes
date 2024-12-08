import MessengerIcon from "@/Components/IconMessager";
import InformasiVillage from "@/Components/InformationVillage";
import Navbar from "@/Components/Navbar";
import React from "react";

const App = () => {
  return (
    <div>
      <Navbar />
          <InformasiVillage />
      <MessengerIcon />
    </div>
  );
};

export default App;

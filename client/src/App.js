import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import './styles/global.scss'; 

function App() {
  return (
     < >
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;

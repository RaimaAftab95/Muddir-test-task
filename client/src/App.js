import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import './styles/global.scss'; 


function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <Dashboard />
    </div>
  );
}

export default App;
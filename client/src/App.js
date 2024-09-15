import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import './styles/global.scss'; 
import { Box } from "@chakra-ui/react";

function App() {
  return (
     <Box display="flex" height="100vh" width="100vw">
      <Sidebar />
      <Dashboard />
    </Box>
  );
}

export default App;

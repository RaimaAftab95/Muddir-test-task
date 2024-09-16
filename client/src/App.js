import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import './styles/global.scss'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItem from './pages/AddItem';
import ItemsList from './pages/ItemsList';
import UpdateItem from './pages/UpdateItem';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Dashboard />
        <main>
          <Routes>
            <Route path="/" element={<ItemsList />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/update/:id" element={<UpdateItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

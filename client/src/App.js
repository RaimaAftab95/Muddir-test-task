// import React, { useEffect, useState } from 'react';
// import api from './api/api';

// const App = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       const response = await api.get('/items');
//       setItems(response.data);
//     };
//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item._id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

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
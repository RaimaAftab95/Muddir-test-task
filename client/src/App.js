import React, { useEffect, useState } from 'react';
import api from './api/api';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.get('/items');
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

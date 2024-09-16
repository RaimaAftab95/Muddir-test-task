import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems, deleteItem } from '../api/api';
import { Button, Box, Text } from '@chakra-ui/react';
import { toast } from 'react-toastify';

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item._id !== id));
       toast.error('Item deleted successfully'); // notification
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
    toast.success('update your item'); // Show success notification
   
  };

  return (
    <Box p="4" ml="260px">
      <Text fontSize="2xl" mb="4">Items List</Text>
      {items.map(item => (
        <Box key={item._id} mb="4" p="4" borderWidth="1px" borderRadius="md">
          <Text fontSize="xl">{item.name}</Text>
          <Text>{item.description}</Text>
          <Text color="green">${item.price}</Text>
          <Button colorScheme="blue" onClick={() => handleUpdate(item._id)} mr="2">Update</Button>
          <Button colorScheme="red" onClick={() => handleDelete(item._id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
};

export default ItemsList;

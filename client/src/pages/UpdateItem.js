import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem, updateItem } from '../api/api';
import { Button, Box, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { toast } from 'react-toastify';

const UpdateItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getItem(id);
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateItem(id, item);
       toast.success('Item updated successfully'); // Show success notification
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p="4" ml="260px">
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
            <h1>Update Item</h1>
          <FormLabel>Name</FormLabel>
          <Input value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Description</FormLabel>
          <Input value={item.description} onChange={(e) => setItem({ ...item, description: e.target.value })} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Price</FormLabel>
          <Input type="number" value={item.price} onChange={(e) => setItem({ ...item, price: e.target.value })} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Update Item</Button>
      </form>
    </Box>
  );
};

export default UpdateItem;

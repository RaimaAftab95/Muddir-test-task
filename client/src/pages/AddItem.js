import React, { useState } from 'react';
import { createItem } from '../api/api';
import { Button, Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createItem({ name, description, price });
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p="4" ml="260px">
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
            <h1>Add Item</h1>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Description</FormLabel>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Price</FormLabel>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Add Item</Button>
      </form>
    </Box>
  );
};

export default AddItem;

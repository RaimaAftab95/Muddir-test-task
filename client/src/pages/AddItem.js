import React, { useState  } from 'react';
import { createItem } from '../api/api';
import { Text, Button, Box, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createItem({ name, description, price });
      setName('');
      setDescription('');
      setPrice('');
      toast.success('Project added successfully');
       navigate('/'); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p="4" ml={{ base: "0", md: "260px" , lg: "260" }}>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Add Project
        </Text>
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
        <Button type="submit" colorScheme="blue">Add Project</Button>
      </form>
    </Box>
  );
};

export default AddItem;

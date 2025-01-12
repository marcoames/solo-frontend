import React from 'react';
import FormLayout from '../components/FormLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';

function CreateCabinPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cabin created successfully');
  };

  return (
    <FormLayout title="Create a New Cabin">
      <p>Fill out the details below to create a new cabin.</p>
      <form onSubmit={handleSubmit}>
        <InputField label="Cabin Name" id="cabin-name" type="text" placeholder="Enter cabin name" required />
        <InputField label="Location" id="location" type="text" placeholder="Enter location" required />
        <InputField label="Capacity" id="capacity" type="number" placeholder="Enter capacity" required />
        <InputField label="Price per Night" id="price" type="number" placeholder="Enter price" required />
        <Button type="submit">Create Cabin</Button>
      </form>
    </FormLayout>
  );
}

export default CreateCabinPage;

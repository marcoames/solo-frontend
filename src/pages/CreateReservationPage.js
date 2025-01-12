import React from 'react';
import FormLayout from '../components/FormLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';

function CreateReservationPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation created successfully');
  };

  return (
    <FormLayout title="Create a New Reservation">
      <p>Fill out the details below to create a new reservation.</p>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Guest Name"
          id="guest-name"
          type="text"
          placeholder="Enter guest name"
          required
        />
        <InputField
          label="Cabin"
          id="cabin"
          type="text"
          placeholder="Enter cabin name or ID"
          required
        />
        <InputField
          label="Check-in Date"
          id="check-in"
          type="date"
          required
        />
        <InputField
          label="Check-out Date"
          id="check-out"
          type="date"
          required
        />
        <InputField
          label="Number of Guests"
          id="guest-count"
          type="number"
          placeholder="Enter number of guests"
          required
        />
        <Button type="submit">Create Reservation</Button>
      </form>
    </FormLayout>
  );
}

export default CreateReservationPage;

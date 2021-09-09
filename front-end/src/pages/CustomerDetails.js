import React from 'react';
import NavBar from '../components/NavBar';

const CustomerDetails = () => (
  (
    <div>
      <NavBar userType="customer" userName="Zé birita" />
      <p>
        CUSTOMER DETAILS
      </p>
    </div>
  )
);

export default CustomerDetails;

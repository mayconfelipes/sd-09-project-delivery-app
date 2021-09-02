import React from 'react';
import Header from '../components/Header';
import CardOrder from '../components/CardOrder';
import '../styles/Orders.css';

export default function Orders() {
  return (
    <main>
      <Header />
      <section>
        <CardOrder />
      </section>
    </main>
  );
}

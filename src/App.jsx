import React from 'react';
import ProductFilter from './components/ProductFilter';
import ListRenderer from './components/ListRenderer';
import AnimalsList from './components/AnimalsList';
import './App.css';

export default function App() {
  const PRODUCTS = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  ];

  const FRUIT_QTY = { apple: 95, orange: 45, banana: 105, coconut: 159, pineapple: 37 };
  const VEG_QTY = { potatoes: 110, celery: 15, carrots: 25, corn: 63, broccoli: 50 };

  const ANIMALS = [
    { name: 'Lion', scientificName: 'Panthera leo', weight: '140kg', diet: 'meat' },
    { name: 'Gorilla', scientificName: 'Gorilla beringei', weight: '205kg', diet: 'plants, insects' },
    { name: 'Zebra', scientificName: 'Equus quagga', weight: '322kg', diet: 'plants' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Inventory</h1>
      <ProductFilter products={PRODUCTS} />

      <h1>Render Lists</h1>
      <ListRenderer title="Fruits" items={FRUIT_QTY} />
      <ListRenderer title="Vegetables" items={VEG_QTY} />

      <h1>Animals</h1>
      <AnimalsList animals={ANIMALS} />
    </div>
  );
}

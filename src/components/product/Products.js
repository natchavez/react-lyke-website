import React from 'react';
import classes from './Products.module.css';
import ProductFilter from './ProductFilter';
// import background from '../../assets/caps/1.jpg';
const PRODUCTS = [
  {
    id: 'c1',
    capName: 'Cap 1',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc:
      'https://image.shutterstock.com/image-photo/baseball-cap-isolated-on-white-260nw-700804645.jpg',
  },
  {
    id: 'c2',
    capName: 'Cap 1',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: './../caps/1.jpg',
  },
  {
    id: 'c3',
    capName: 'Cap 1',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: '../src/assets/caps/3.jpg',
  },
];
const Products = () => {
  // const imgSources = [{id:'c1' capName: 'Cap 1', description: 'High Quality Cap', price: 200.00 }, {id:'c1' capName: 'Cap 1', description: 'High Quality Cap', price: 200.00 }]
  return (
    <div className={classes.container}>
      <ProductFilter />

      <div className={classes['grid-container']}>
        {PRODUCTS.map((product) => (
          <img src={product.imageSrc}></img>
        ))}
      </div>
    </div>
  );
};

export default Products;

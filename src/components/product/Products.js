import React from 'react';
import classes from './Products.module.css';
import ProductFilter from './ProductFilter';
import cap1 from './caps/1.jpg';
import cap2 from './caps/2.jpg';
import cap3 from './caps/3.jpg';
import cap4 from './caps/4.jpg';
import cap5 from './caps/5.jpg';
import cap6 from './caps/6.jpg';
import cap7 from './caps/7.jpg';
import cap8 from './caps/8.jpg';
import Item from './Item';

const PRODUCTS = [
  {
    id: 'c1',
    capName: 'Black Snapback',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap1,
  },
  {
    id: 'c2',
    capName: 'NY Black Snapback',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap2,
  },
  {
    id: 'c3',
    capName: 'Black C Snapback',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap3,
  },
  {
    id: 'c4',
    capName: 'White and Purple',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap4,
  },
  {
    id: 'c5',
    capName: 'P Black Snapback',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap5,
  },
  {
    id: 'c6',
    capName: 'NY Black Snapback',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap6,
  },
  {
    id: 'c7',
    capName: 'P White and Red',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap7,
  },
  {
    id: 'c8',
    capName: 'SkyBlue LA',
    description: 'High Quality Cap Tat are designed for you',
    price: 200.0,
    imageSrc: cap8,
  },
];
const Products = () => {
  // const imgSources = [{id:'c1' capName: 'Cap 1', description: 'High Quality Cap', price: 200.00 }, {id:'c1' capName: 'Cap 1', description: 'High Quality Cap', price: 200.00 }]
  return (
    <div className={classes.container}>
      <ProductFilter />
      <div className={classes['grid-container']}>
        {PRODUCTS.map((product) => (
          <Item
            imageSrc={product.imageSrc}
            name={product.capName}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

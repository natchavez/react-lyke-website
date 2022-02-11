import React from 'react';
import classes from './HeadWear.module.css';
import Products from '../../components/product/Products';
const HeadWear = () => {
  return (
    <div className={classes.container}>
      <h1>Adjustable, Fitted & Snapback Hats</h1>
      <p className={classes.message}>
        Book your Order through Lalamove or Grab
      </p>
      <Products />
    </div>
  );
};

export default HeadWear;

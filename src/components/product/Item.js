import classes from './Item.module.css';

const Item = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes['card-content']}>
        <img src={props.imageSrc} />
        <div className={classes['detail-container']}>
          <h2>{props.name}</h2>
          <p className={classes.price}>Php {props.price}</p>
          <p>Some description of the product.</p>
        </div>
      </div>
    </div>
  );
};

export default Item;

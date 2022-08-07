import './shop-item.css';
import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../../../models/product-item';

function ShopItem(props) {
  const { item } = props;
  return (
    <div className='shop-item'>
      <img className='shop-item__img' src={item.img} alt={item.name} />
      <span className='shop-item__name'>{item.name}</span>
      <span className='shop-item__color'>{item.color}</span>
      <span className='shop-item__price'>${item.price}</span>
      <button className='shop-item__btn'>Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.instanceOf(ProductItem).isRequired
};

export default ShopItem;
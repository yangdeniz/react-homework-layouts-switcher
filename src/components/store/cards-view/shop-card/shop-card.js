import './shop-card.css';
import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../../../models/product-item';

function ShopCard(props) {
  const { card } = props;
  return (
    <div className='shop-card'>
      <h3 className='shop-card__header'>{card.name}</h3>
      <span className='shop-card__subheader'>{card.color}</span>
      <img className='shop-card__img' src={card.img} alt={card.name} />
      <div className='shop-card__footer'>
        <span className='shop-card__price'>${card.price}</span>
        <button className='shop-card__btn'>Add to cart</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(ProductItem).isRequired
};

export default ShopCard;
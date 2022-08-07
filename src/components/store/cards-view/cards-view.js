import './cards-view.css';
import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './shop-card/shop-card';
import ProductItem from '../../../models/product-item';

function CardsView(props) {
  const { cards } = props;
  return (
    <div className='products-container--cards-view'>
      {cards.map(card => <ShopCard card={card} key={cards.indexOf(card)} />)}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(ProductItem)).isRequired
};

export default CardsView;
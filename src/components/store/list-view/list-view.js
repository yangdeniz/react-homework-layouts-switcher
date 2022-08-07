import './list-view.css';
import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './shop-item/shop-item';
import ProductItem from '../../../models/product-item';

function ListView(props) {
  const { items } = props;
  return (
    <div className='products-container--list-view'>
      {items.map(item => <ShopItem item={item} key={items.indexOf(item)} />)}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(ProductItem)).isRequired
};

export default ListView;
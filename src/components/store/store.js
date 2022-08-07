import './store.css';
import { React, useState } from 'react';
import CardsView from './cards-view/cards-view';
import IconSwitch from './icon-switch/icon-switch';
import ViewMode from './icon-switch/view-mode';
import ListView from './list-view/list-view';
import ProductItem from '../../models/product-item';

function Store() {
  const [viewMode, setViewMode] = useState(ViewMode.module);
  const onViewModeSwitched = (newViewMode) => setViewMode(newViewMode);

  const source = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const products = source.map(item => new ProductItem(item.name, item.color, item.price, item.img));

  return (
    <div className='store-container'>
      <IconSwitch viewMode={viewMode} onSwitch={onViewModeSwitched} />
      <div className={viewMode !== ViewMode.module ? 'hidden' : null}>
        <CardsView cards={products} />
      </div>
      <div className={viewMode !== ViewMode.list ? 'hidden' : null}>
        <ListView items={products} />
      </div>
    </div>
  );
}

export default Store;
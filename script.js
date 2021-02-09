'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods__item">
    <h3 class="goods__title">${title}</h3>
    <p class="goods__price">${price} рублей</p>
    <button class="goods__button">Добавить</button>
    </div>`;
};

const renderGoodsList = list => {
    document.querySelector('.goods__list').insertAdjacentHTML('beforeend', list.map(item =>
        renderGoodsItem(item.title, item.price)).join(''));
};

renderGoodsList(goods);
'use strict';

// Массив товаров.
const fetchGoodsItem = [
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

// Класс списка товаров GoodsList.
class GoodsList {
    goods = [];

    // Служебный метод, который возвращает отдельный элемент.
    __getGoodsItemTemplate(item) {
        return `<div class="goods__item">
        <h3 class="goods__title">${item.title}</h3>
        <p class="goods__price">${item.price} рублей</p>
        <button id="goodsBtn" class="goods__button">Добавить</button>
        </div>`;
    }

    // Метод getGoods массива товаров.
    getGoods(goods) {
        this.goods = goods;
    }

    // Метод render выбирает элемент и добавляет в обёртку.
    render() {
        const goodsTemplates = this.goods.map(item => this.__getGoodsItemTemplate(item)).join("");
        document.querySelector('.goods__list').insertAdjacentHTML('beforeend', goodsTemplates);
    }

    // Метод, определяющий суммарную стоимость всех товаров.
    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
                console.log(good.price);
            }
        });
        let totalGoodsAnswer = "Все товары на сумму " + totalPrice + " рублей";
        // document.querySelector('.goods__total').innerHTML = totalGoodsAnswer;
        console.log(totalGoodsAnswer);
    }
}

// Класс элемента корзины.
class CartItem { }

// Класс корзины
class Cart {

    // Метод добавления товара в корзину.
    addToCart() { }

    // Метод удаления товара из корзины.
    deleteFromCart() { }

    // Метод подсчета стоимости и количества товаров в корзине.
    cartCount() { }
}



const cart = new Cart();

const list = new GoodsList();
list.getGoods(fetchGoodsItem);

window.onload = () => {
    list.render();
    list.calcAllGoods();
};
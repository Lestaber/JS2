'use strict';

const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

fetch(url)
    .then(response => response.json())
    .then(json => {
        itemCart.getGoods(json)
    })

// Класс элемента корзины.
class CartItem {
    goods = [];

    // Служебный метод, который возвращает отдельный элемент.
    __getGoodsItemTemplate(item) {
        return `<div class="goods__item">
        <h3 class="goods__title">${item.product_name}</h3>
        <p class="goods__price">${item.price} рублей</p>
        <button id="btn" class="goods__button">Добавить</button>
        </div>`;
    };

    // Метод getGoods массива товаров.
    getGoods(goods) {
        this.goods = goods;
    }

    // Метод render выбирает элемент и добавляет в обёртку.
    render() {
        const goodsTemplates = this.goods.map(item => this.__getGoodsItemTemplate(item)).join("");
        document.querySelector('.goods').insertAdjacentHTML('beforeend', goodsTemplates);
    }

    // Метод, определяющий суммарную стоимость всех товаров.
    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
            }
        });
    }
}

// Класс корзины
class Cart {

    //Метод добавления товара в корзину.
    addToCart(item) {
        let cartItem = this.goods.filter(el => el.title == product.title)[0]

        if (cartItem != undefined) {
            cartItem.addQuantity();
        } else {
            let item = new CartItem(product);
            this.goods.push(item);
        }
    }

    // Метод удаления товара из корзины.
    deleteFromCart() { }

    // Метод подсчета стоимости и количества товаров в корзине.
    cartCount() { }
}

const itemCart = new CartItem();
// this.goods.push(item);

const cart = new Cart();

window.onload = () => {
    itemCart.render();
    itemCart.getGoods(fetch);
};
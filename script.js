'use strict';

const BASE_URL = 'https://mock-api-builder.vercel.app/api/schema/get';

const app = new Vue({
    el: '#root',
    data: {
        goods: [],
        filteredGoods: [],
        cartGoods: [],
        searchGoods: '',
        errorMessage: '',
        totalSum: 0,
        isVisibleCart: false,
    },
    methods: {
        getGoods() {
            fetch(`${BASE_URL}/6037991a018c3600095017a8`)
                .then(r => r.json())
                .then(r => {
                    this.goods = r;
                    this.filteredGoods = this.goods;
                })
                .catch((e) => {
                    this.errorMessage = e;
                })
        },
        serchItem() {
            this.filteredGoods = this.goods.filter(item => {
                const regexp = new RegExp(this.searchGoods, 'i');
                const match = item.productName.match(regexp);
                return !!match;
            })
        },
        addToCart(id) {
            if (!this.cartGoods.find(i => i.id === id)) {
                const item = this.filteredGoods.find((el) => {
                    if (el.id === id) {
                        return true;
                    } else {
                        return false;
                    }
                });
                this.cartGoods.push(item);
            } else {
                this.filteredGoods.forEach(el => {
                    if (el.id === id) {
                        el.quantity++
                    }
                })
            }
        },
        deleteItemCart(id) {
            const index = this.cartGoods.findIndex(i => i.id === id);
            if (index !== -1) {
                this.cartGoods.splice(index, 1);
            }
        },
        deleteAllCart() {
            this.cartGoods = [];
        },
    },
    computed: {
        totalSumItem() {
            let array = this.cartGoods;
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum = sum + parseInt(array[i].price * array[i].quantity);
            }
            return sum;
        },
        totalquantityItem() {
            let array = this.cartGoods;
            let quantity = 0;
            for (let i = 0; i < array.length; i++) {
                quantity = quantity + parseInt(array[i].quantity);
            }
            return quantity;
        }
    },
    mounted() {
        this.getGoods();
    }
});
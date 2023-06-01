const product = {
    name: 'Стол',
    price: 2000,
    count: 2,
    userRegistred: false,
    reg: function() {
        this.userRegistred = true;
    },
    countProduct: function() {
        if (this.count > 0) {
            console.log('вы можете купить данный твар');
        } else {
            console.log('данный твар нельзя добавить в корзину');
        }
    },
    buyProduct: function() {
        if (this.userRegistred) {
            console.log('Товар в корзине');
        } else {
            console.log('вам необходимо зарегестрироваться  сначала выполнить product.reg()');
        }
    }
};
product.countProduct();
product.buyProduct();
product.reg();
// let productSale = product;
// productSale.price = 1500;
// let productNew = product;
// productNew.text = 'lorem';
// console.log(productSale);
// console.log(product);
// console.log(productNew);
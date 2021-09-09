const paths = {
  home: '/',
  login: '/login',
  register: '/register',
  customer: {
    root: '/customer',
    get products() { return `${this.root}/products`; },
    get checkout() { return `${this.root}/checkout`; },
    get orders() { return `${this.root}/orders`; },
    get orderDetails() { return `${this.orders}/:id`; },
  },
  seller: {
    root: '/seller',
    get orders() { return `${this.root}/orders`; },
    get orderDetails() { return `${this.orders}/<id>`; },
  },
  admin: {
    root: '/admin',
    get manage() { return `${this.root}/manage`; },
  },
};

export default paths;

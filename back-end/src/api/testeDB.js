const { salesProducts, sales } = require('../database/models');

product_id = 1
sale_id = 1
quantity = 2

sales.create({
    user_id: 1,
    seller_id: 2,
    total_price: 7.9,
    delivery_address: 'rua xablau',
    delivery_number: '102',
    sale_date: '2012-12-12',
    status: 'OK'
})

salesProducts.create({ product_id, sale_id, quantity })
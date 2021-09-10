const DEFAULT_ORDER = {
  sale: {
    id: 0,
    total_price: '0.00',
    delivery_address: '',
    delivery_number: '',
    sale_date: '00/00/0000',
    status: '',
    user_id: 0,
    seller_id: 0,
  },
  products: [
    {
      res: {
        id: 0,
        name: '',
        price: '0.00',
        urlImage: '',
      },
      quantity: 0,
    },
    {
      res: {
        id: 0,
        name: '',
        price: '0.0',
        urlImage: '',
      },
      quantity: 0,
    },
  ],
};

export default DEFAULT_ORDER;

module.exports = (Model, saleId, cart) => {
  cart.forEach(({ productId, quantity }) => {
    Model.create({
      saleId,
      productId,
      quantity,
    });
  });
};

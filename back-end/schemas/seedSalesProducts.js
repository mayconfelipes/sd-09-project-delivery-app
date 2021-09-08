module.exports = (Model, saleId, cart) => {
  cart.forEach(({ id, quantity }) => {
    Model.create({
      saleId,
      productId: id,
      quantity,
    });
  });
};

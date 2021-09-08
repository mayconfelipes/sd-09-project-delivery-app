module.exports = (Model, saleId, cart) => {
  cart.forEach(({ id, quantity }) => {
    Model.create({
      saleId,
      id,
      quantity,
    });
  });
};

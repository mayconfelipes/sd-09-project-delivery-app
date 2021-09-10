module.exports = (Model, cart) => {
  const totalPrice = cart
    .reduce(async (acc, { id, quantity }) => {
      const newAcc = await acc;
      const product = await Model.findByPk(id);

      return newAcc + (product.dataValues.price * quantity);
    }, 0);
    
  return totalPrice;
};
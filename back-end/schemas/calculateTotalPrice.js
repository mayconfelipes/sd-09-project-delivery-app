module.exports = (Model, cart) => {
  const totalPrice = cart
    .reduce(async (acc, { productId, quantity }) => {
      const newAcc = await acc;
      const product = await Model.findById(productId);

      return newAcc + (product.dataValues.price * quantity);
    }, 0);
    
  return totalPrice;
};
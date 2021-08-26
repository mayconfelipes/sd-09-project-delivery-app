const userService = require("../services/user");

const findUser = async (req, res) => {
  console.log(req.body.hasToken)
  if (req.body.hasToken === false ){
    return res.send('res')
  }
  const { password, email } = req.body;
  const user = await userService.findUser(password, email);
  if (user.hasToken === false) {
    return res.send(user.hasToken);
  }
  return res.status(200).send(user.hasToken);
};

module.exports = {
  findUser
};

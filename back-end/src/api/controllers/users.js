const userService = require("../services/user");

const findUser = async (req, res) => {
  // console.log(req.body.hasToken)
  // if (req.body.hasToken === false ){
  //   return res.status(500).json({hasToken: false})
  // }
  const { password, email } = req.body;
  const {hasToken} = await userService.findUser({password, email});
  if (hasToken === false) {
    return res.status(404).send({hasToken});
  }
  return res.status(200).send({hasToken});
};

// const registerUser = async (req, res) => {
//   const { password, name, email} = req.body;
//   const {alreadyExists} = await userService.registerUser({password, name, email});
//   if (alreadyExists) {
//     return res.status(409).send({alreadyExists})
//   }
//   return res.status(201).send({alreadyExists})
// }

module.exports = {
  findUser,
  // registerUser
};

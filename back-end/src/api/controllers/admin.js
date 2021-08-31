const jwt = require("jsonwebtoken");
const adminService = require("../services/admin");
const { join } = require("path");
const jwtKey = require("fs")
  .readFileSync(join(__dirname, "..", "..", "..", "jwt.evaluation.key"), {
    encoding: "utf-8"
  })
  .trim();

const tokenConfig = email => {
  const jwtConfig = {
    expiresIn: "7d",
    algorithm: "HS256"
  };
  const token = jwt.sign({ email }, jwtKey, jwtConfig);
  return token;
};

const verifyAdmin = adminToken => {
  return jwt.verify(adminToken, jwtKey);
};

const registerUser = async (req, res) => {
  const adminToken = req.headers.authorization;
  // console.log(adminToken)
  const { data } = verifyAdmin(adminToken);
  //  console.log(data)
  const { password, name, email, role } = req.body;
  if (data.email === "adm@deliveryapp.com") {
    console.log("ifei");
    const response = await adminService.registerUser({
      password,
      name,
      email,
      role
    });
    const token = tokenConfig(email);
    // console.log(token)
    if (!response) {
      return res.status(409).send({ alreadyExists: true });
    }
    console.log("cheguei na 34");
    return res
      .status(201)
      .send({
        user: { token, email, name: response.name, role: response.role }
      });
  }
};

module.exports = {
  registerUser
};

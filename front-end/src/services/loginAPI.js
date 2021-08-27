const loginAPI = (body) => {
  const endPoint = 'localhost:3001/login';
  const init = {
    method: 'POST',
    body,
    mode: 'cors',
    cache: 'default',
  };

  const request = fetch(endPoint, init);
  const response = request.json();
  console.log(response);
  return response;
};

module.exports = {
  loginAPI,
};

const register = async (req, res) => {
  res.send('user registered')
}
const logIn = async (req, res) => {
  res.send('user logged in')
}
module.exports = {
  register,
  logIn,
}

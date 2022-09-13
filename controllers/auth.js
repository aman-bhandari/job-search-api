const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
// const { BadRequestError } = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  // mongoose validation will take care of these things
  // const { name, email, password } = req.body
  //   throw new BadRequestError('Please provide valid name,email and password')
  // if (!name || !email || !password) {
  // const salt = await bcrypt.genSalt(10)
  // }
  // const tempUser = { name, email, password: hashedPassword }
  // const hashedPassword = await bcrypt.hash(password, salt)
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json(user)
}

const logIn = async (req, res) => {
  res.send('user logged in')
}

module.exports = {
  register,
  logIn,
}

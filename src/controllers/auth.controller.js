const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const config = require('../config/config');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

const handleGoogleLogin = catchAsync(async (req, res) => {
  const userProfile = req.user;

  // Perform actions with the user's profile (e.g., save to database, generate tokens, etc.)
  console.log(req.user);
  // Send a response or redirect as needed
  res.send({ user: req.user });
  // res.status(httpStatus.NO_CONTENT).send();
});

const handleLinkedInLogin = catchAsync(async (req, res) => {
  const userProfile = req.user;

  // Perform actions with the user's profile (e.g., save to database, generate tokens, etc.)
  console.log(req.user);
  // Send a response or redirect as needed
  res.send({ user: req.user });
  // res.status(httpStatus.NO_CONTENT).send();
});

const handleTwitterLogin = catchAsync(async (req, res) => {
  const userProfile = req.user;

  // Perform actions with the user's profile (e.g., save to database, generate tokens, etc.)
  console.log(req.user);
  // Send a response or redirect as needed
  // res.redirect('https://example.com');
  res.send({ user: req.user });
  // res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
  handleGoogleLogin,
  handleLinkedInLogin,
  handleTwitterLogin
};

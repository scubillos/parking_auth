var express = require('express');
var router = express.Router();

const jwt = require("jsonwebtoken");
const User = require('../models/user');

require('dotenv').config();

/* Login */
router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch(error) {
    console.log(error);
    res.statusCode = 404;
    res.send({
      message: `Error! Something went wrong.`
    });
    return;
  }
  if (!existingUser || existingUser.password !== password) {
    res.statusCode = 404;
    res.send({
      message: `Wrong details please check at once.`
    });
    return;
  }

  // Generate token
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_TIME
      }
    );
  } catch (err) {
    console.log(err);
    res.statusCode = 404;
    res.send({
      message: `Error! Something went wrong.`
    });
  }

  res.statusCode = 200;
  res.send({
    success: true,
    data: {
      userId: existingUser.id,
      email: existingUser.email,
      token: token,
    },
  });
});

router.get('/verify', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  //Authorization: 'Bearer TOKEN'
  if(!token)
  {
    res.statusCode = 400;
    res.send({
      success: false,
      message: `Error! Token was not provided.`,
    });
  }

  try {
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY );

    //Decoding the token
    res.status(200).json({
      success:true,
      data:{
        userId: decodedToken.userId,
        email: decodedToken.email
      }
    });
  } catch (error) {
    let message;
    if (error instanceof jwt.TokenExpiredError) {
      res.statusCode = 400;
      message = `Expired Token.`;
    } else if (error instanceof jwt.JsonWebTokenError) {
      res.statusCode = 401;
      message = `Invalid Token.`;
    } else {
      res.statusCode = 500;
      message = `Internal Server Error.`;
    }

    res.send({
      success: false,
      message: message,
    });
  }
});

module.exports = router;

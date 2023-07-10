import * as bcrypt from 'bcrypt';

const mongoose = require('mongoose');

const dbConnect = require('@/pages/api/utils/connect.js');
const Admin = require('@/lib/models/adminModel.js');

export default async function POST(req, res) {
  await dbConnect();

  const body = req.body;

  const [user] = await Admin.find({ email: body.email });

  if (user) {
    res.json({ result: 'User already signed in' });
  } else {
    const newUser = await Admin.create({
      username: body.username,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    });
    /*  res.json(body); */
    const newUserWithoutPass = Object.entries(newUser._doc).filter(
      (param) => param[0] != 'password'
    );

    try {
      res.json(Object.fromEntries(newUserWithoutPass));
    } catch (error) {
      console.log(error);
    }
  }
}

//create user and push it to the database

// for hashinf the pasword await bcrypt.hash(body.password,10)

// const {pasword,...result} = user
// return new Response(JSON.stringify(result))

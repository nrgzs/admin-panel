import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

const mongoose = require('mongoose');

const dbConnect = require('@/utils/connect.js');
const Admin = require('@/lib/models/adminModel.js');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  await dbConnect();

  const [user] = await Admin.find({ email: body.email });

  if (user) {
    res.json({ result: 'User already signed in' });
  } else {
    const newUser = await Admin.create({
      username: body.username,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    });

    const newUserWithoutPass = Object.entries(newUser._doc).filter(
      (param) => param[0] != 'password'
    );

    res.json({ result: Object.fromEntries(newUserWithoutPass) });
  }
}

/* create user and push it to the database

for hashinf the pasword await bcrypt.hash(body.password,10)

const {pasword,...result} = user
return new Response(JSON.stringify(result))
 */

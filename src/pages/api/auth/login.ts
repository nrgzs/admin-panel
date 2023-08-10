// import * as bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
const mongoose = require('mongoose');

const Admin = require('@/lib/models/adminModel');
const dbConnect = require('@/utils/connect');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const body = req.body;
    console.log('🚀 ~ file: index.ts:10 ~ handler ~ body:', body);

    const [user] = await Admin.find({ email: body.username });
    console.log('🚀 ~ file: index.js:19 ~ POST ~ user:', user);

   
    if (user) {
      
      res.status(200).json({ result: user });
    } else {
      res.json({ result: 'user not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}


 // (await bcrypt.compare(body.password, user.password))
    //// const userWithoutPass = Object.entries(user._doc).filter(
      //   (param) => param[0] != 'password'
      // );
      // Object.fromEntries(userWithoutPass)

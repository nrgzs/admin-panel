const bcrypt = require('bcrypt');
import { NextApiRequest, NextApiResponse } from 'next';
const mongoose = require('mongoose');

const Admin = require('@/lib/models/adminModel');
const dbConnect = require('@/services/DBconnect');

export default async function handler(
  req,
  res
) {
  try {
    await dbConnect();
    const body = req.body;
    console.log('🚀 ~ file: index.ts:10 ~ handler ~ body:', body);

    const [user] = await Admin.find({ email: body.username });
    console.log('🚀 ~ file: index.js:19 ~ POST ~ user:', user);
    const pass = await bcrypt.compare(body.password, user.password);
    console.log('🚀 ~ file: login.ts:20 ~ pass:', pass);

    if (user && pass) {
      const userWithoutPass = Object.entries(user._doc).filter(
        (param) => param[0] != 'password'
      );

      res.status(200).json(Object.fromEntries(userWithoutPass));
    } else {
      res.status(401).json(null);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

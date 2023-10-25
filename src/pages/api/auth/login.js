const bcrypt = require('bcrypt');
import { signJwtAccessToken } from '@/lib/jwt/jwt';
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
      console.log("🚀 ~ file: login.js:24 ~ user:", user)
      // const{password,...userWithoutPass}= user
      const userWithoutPasswithD = Object.entries(user._doc).filter(
        (param) => param[0] != 'password'
      );
      const userWithoutPass= Object.fromEntries(userWithoutPasswithD)
console.log('🚀 ~ file: login.js:28 ~ userWithoutPass:', userWithoutPass);

      // Object.fromEntries(userWithoutPass);
      console.log('🚀 ~ file: login.js:28 ~ userWithoutPass:', userWithoutPass);

const accessToken = signJwtAccessToken(userWithoutPass)

const result = {

  ...userWithoutPass,
  accessToken
}
  console.log('🚀 ~ file: login.js:30 ~ result:', result);

      res.status(200).json(result);
    } else {
      res.status(401).json(null);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

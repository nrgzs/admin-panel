const bcrypt = require('bcrypt');
import { BSON } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const mongoose = require('mongoose');

const Admin = require('@/lib/models/adminModel');
const dbConnect = require('@/services/DBconnect');

export default async function handler(req, res) {
  try {
    await dbConnect();
    const body = req.body;
    console.log("🚀 ~ file: user.js:14 ~ handler ~ body:", body)
    const method = req.method;

    const [user] = await Admin.find({ email: body.email });

    if (method === 'GET') {
      const admins = await Admin.find({}, { __v: 0, password: 0 });
      console.log('🚀 ~ file: user.ts:22 ~ admins:', admins);
      res.status(200).json({ admins });
    } else if (method === 'POST') {
      if (user) {
        res.json({ result: 'User already signed in' });
      } else {
        const newUser = await Admin.create({
          name: body.name,
          email: body.email,
          role: body.role,
          password: await bcrypt.hash(body.password, 10),
        });

        const newUserWithoutPass = Object.entries(newUser._doc).filter(
          (param) => param[0] != 'password'
        );

        res.json({ result: Object.fromEntries(newUserWithoutPass) });
      }
    } else if (method === 'DELETE') {
      const id = req.query.ID;
console.log(id);
      await Admin.find({ _id: new BSON.ObjectId(id) }).deleteOne();

      res.json({ success: true });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}



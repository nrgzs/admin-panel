const bcrypt = require('bcrypt');
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

     const [user] = await Admin.find({ email: body.email });

     if (user) {
       res.json({ result: 'User already signed in' });
     } else {
       const newUser = await Admin.create({
         name: body.name,
         email: body.email,
         password: await bcrypt.hash(body.password, 10),
       });

       const newUserWithoutPass = Object.entries(newUser._doc).filter(
         (param) => param[0] != 'password'
       );

       res.json({ result: Object.fromEntries(newUserWithoutPass) });
     }
    
  } catch (error) {
     console.error('Error:', error);
     res.status(500).json({ error: 'An error occurred' });
  }
 
}

/* create user and push it to the database

for hashinf the pasword await bcrypt.hash(body.password,10)

const {pasword,...result} = user
return new Response(JSON.stringify(result))
 */

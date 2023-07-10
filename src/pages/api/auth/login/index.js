import * as bcrypt from 'bcrypt';
const mongoose = require('mongoose');

const Admin = require('@/lib/models/adminModel.js');
const dbConnect = require('@/pages/api/utils/connect.js');

export default async function POST(req, res) {
  await dbConnect();

  const body = req.body;

  const [user] = await Admin.find({ email: body.email });
  console.log('🚀 ~ file: index.js:19 ~ POST ~ user:', user);

  //fetch the user from database with giving req body

  /* for hash pasword
    (await bcrypt.compare(body.password, adminUser.password)) */
  
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const userWithoutPass = Object.entries(user._doc).filter(
      (param) => param[0] != 'password'
    );

    res.json(Object.fromEntries(userWithoutPass));
  } else {
    res.json({ result: 'user not found' });
  }
}

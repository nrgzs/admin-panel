const Admin = require('@/lib/models/adminModel.js');

const mongoose = require('mongoose');
/* const Admin = mongoose.model('Admin'); */
const dbConnect = require('@/pages/api/utils/connect.js');
/* const adminModelCache = require('@/pages/api/utils/adminModelCache.js');
 */
export default async function POST(req, res) {
  await dbConnect();
  /* const Admin = adminModelCache.Admin; */

  const body = req.body;

  /*  res.json(body); */

  const users = await Admin.find({});

  try {
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

//create user and push it to the database

// for hashinf the pasword await bcrypt.hash(body.password,10)

// const {pasword,...result} = user
// return new Response(JSON.stringify(result))

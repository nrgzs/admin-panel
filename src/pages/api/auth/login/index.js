import * as bcrypt from 'bcrypt';
const mongoose = require('mongoose');
/* const Admin = mongoose.model('Admin'); */
 const Admin = require('@/lib/models/adminModel.js');  
const dbConnect = require('@/pages/api/utils/connect.js');
/* const adminModelCache = require('@/pages/api/utils/adminModelCache.js');
 *//* const testdatauser = {
  username: 'nargiz',
  password: '123',
}; */

export default async function POST(req, res) {
 await dbConnect();
/*   const Admin = adminModelCache.Admin; */
  const users = await Admin.find({});

  const body = req.body;

  //fetch the user from database with giving req body
  /* const getAllUsers = async () => {
  try {
      const users = await Usermodel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get users' });
}}
getAllUsers() */

  const adminUser = users.filter((user) => {
    return body.username === user.username;
  });

  try {
    res.json(adminUser);
  } catch (error) {
    console.log(error);
  }

  /* 
  if (body.username === testdatauser.username) {
      return testdatauser;
    } else {
   
     return false
    } 

  if (adminUser && (await bcrypt.compare(body.password, adminUser.password))) {
    const { password, ...userWithoutPass } = adminUser;
    // return new Response(JSON.stringify(userWithoutPass));
    res.json(userWithoutPass);
  }
  res.json({ result: 'user not found' }); */
}

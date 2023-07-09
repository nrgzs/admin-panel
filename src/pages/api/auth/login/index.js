/* import * as bcrypt from 'bcrypt';


const Admin = require('@/lib/mongodb/userModel');
const dbConnect = require('@/lib/mongodb/connect')




const testdatauser = {
  username: 'nargiz',
  password: '123',
};

export default async function POST(req,res) {


const users = await Admin.find()

  res.json(users) */
 /*  const body = req.body; */
/*   const data = await body.json(); */

  //fetch the user from database with giving req body
/* const getAllUsers = async () => {
  try {
      const users = await Usermodel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get users' });
}}
getAllUsers()

 */
/*   function getUser(){
    if (body.username === testdatauser.username) {
      return testdatauser;
    } else {
   
     return false
    }
  };
 const user= getUser()

  if (user &&  await bcrypt.compare(body.password, user.password )) {
    const { password , ...userWithoutPass } = user; 
   // return new Response(JSON.stringify(userWithoutPass));
    res.json(userWithoutPass);
  }
   res.json({result:'user not found'}); } */





const adminModel = require('@/lib/mongodb/adminModel.js');
const dbConnect = require('@/lib/mongodb/connect.js');

export default async function POST(req, res) {
  await dbConnect()
  const body = req.body;

 /*  res.json(body); */

  const users = await adminModel.find({});

  try {
    res.json(users);
  } catch (error) {
    console.log(error);;
  }

 
  };

  //create user and push it to the database

  // for hashinf the pasword await bcrypt.hash(body.password,10)

  // const {pasword,...result} = user
  // return new Response(JSON.stringify(result))


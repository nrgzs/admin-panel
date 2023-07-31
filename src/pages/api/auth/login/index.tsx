// import * as bcrypt from 'bcrypt';
// const mongoose = require('mongoose');

// const Admin = require('@/lib/models/adminModel.js');
// const dbConnect = require('@/utils/connect.js');

// export default function handler(req, res) {
//   const body = req.body;

//   async function getuser() {
//     await dbConnect();

//     const [user] = await Admin.find({ email: body.email });
//     console.log('🚀 ~ file: index.js:19 ~ POST ~ user:', user);

//     if (user && (await bcrypt.compare(body.password, user.password))) {
//       const userWithoutPass = Object.entries(user._doc).filter(
//         (param) => param[0] != 'password'
//       );

//       res.json({ result: Object.fromEntries(userWithoutPass) });
//     }
//     return
//   }

//   getuser();

//   res.json({ result: 'user not found' });
// }

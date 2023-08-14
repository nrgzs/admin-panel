// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){ 
  console.log('hello');
  try {
     res.json({ name: 'John Doe' });
  } catch (error) {
    res.json({ error: error});
  }
  
 
}


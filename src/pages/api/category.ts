import { NextApiRequest, NextApiResponse } from 'next';

const categorySchema = require('@/lib/models/categoryModel');
const dbConnect = require('@/utils/connect');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const body = req.body;
    const method = req.method;
    const [category] = await categorySchema.find({ name: body.name });
    if (method === 'POST') {
      if (!category) {
        const newCategory = await categorySchema.create({
          name: body.name,
          description: body.description,
        });
        res.status(200).json({ newCategory });
      } else if (category) {
        res.status(200).json({ category });
      }
    } else if (method === 'GET') {
      const [category] = await categorySchema.find();
      res.status(200).json({ category });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

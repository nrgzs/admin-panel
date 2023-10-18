import { BSON } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const categorySchema = require('@/lib/models/categoryModel');
const dbConnect = require('@/services/DBconnect');

export default async function handler(
  req,
  res
) {
  try {
    await dbConnect();
    const body = req.body;
    const method = req.method;

    const [category] = await categorySchema.find({ name: body.name });
    const allCategories = await categorySchema.find({}, { __v: 0 });

    if (method === 'GET') {
      res.status(200).json({ allCategories });
    } else if (method === 'POST') {
      // if (!category) {
      const newCategory = await categorySchema.create({
        name: body.name,
        description: body.description,
      });
      res.status(200).json({ newCategory });
      // } else if (category) {
      //   res.status(200).json({ category });
      // }
    } else if (method === 'DELETE') {
      const id = req.query.ID;
      console.log('🚀 ~ file: category.ts:31 ~ req.query:', id);

      const test = await categorySchema
        .find({ _id: new BSON.ObjectId(id) })
        .deleteOne();
      console.log('🚀 ~ file: category.ts:36 ~ test:', test);

      res.json({ success: true });
    } else if (method === 'PUT') {
      const body = req.body;
      const id = req.body._id;

      const update = await categorySchema
        .find({ _id: new BSON.ObjectId(id) })
        .updateOne({ ...body });

      res.status(200).json({ update });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

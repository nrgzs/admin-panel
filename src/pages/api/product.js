import { log } from 'console';
import { BSON } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const mongoose = require('mongoose');

const productSchema = require('@/lib/models/productModel');
const dbConnect = require('@/services/DBconnect');

export default async function handler(
  req,
  res
) { 
  try {
    await dbConnect();

    const method = req.method;
    console.log('🚀 ~ file: product.ts:16 ~ method:', method);

    const body = req.body;
    console.log('🚀 ~ file: product.ts:26 ~ req.body:', req.body);

    const [product] = await productSchema.find({ title: body.title });
    console.log('🚀 ~ file: product.ts:29 ~ product:', product);

    const allProducts = await productSchema.find({}, {  __v: 0 });
    console.log('🚀 ~ file: product.ts:20 ~ allProducts:', allProducts);

    if (method === 'GET') {
      res.status(200).json({ allProducts });
    } else if (method === 'POST') {
      // if (!product) {
      const newProduct = await productSchema.create({
        title: body.title,
        description: body.description,
        category: body.category,
        price: body.price,
        quantityInStock: body.quantityInStock,
        brand: body.brand,
        imageUrl: body.imageUrl,
        rating: body.rating,
      });
      res.status(200).json({ newProduct }); //   const [user] = await Admin.find({ email: body.email });
      // } else if (product) {
      //   res.status(200).json({ product }); //   const [user] = await Admin.find({ email: body.email });
      // }
    } else if (method === 'DELETE') {
      const id = req.query.ID;
      const test = await productSchema
        .find({ _id: new BSON.ObjectId(id) })
        .deleteOne();

      res.json({ success: true });
    } else if (method === 'PUT') {
      const body = req.body;
      const id = req.body._id
      console.log('🚀 ~ file: product.ts:53 ~ body:', new BSON.ObjectId(id));
      
      const update = await productSchema
        .find({ _id: new BSON.ObjectId(id) })
        .updateOne({ ...body });
      console.log("🚀 ~ file: product.ts:58 ~ update:", update)
      res.status(200).json({ update });
    }
  } catch (error) {
    console.error('Error:', req.url, error);
    res
      .status(500)
      .json({ error: 'An error occurred' });
  }
}

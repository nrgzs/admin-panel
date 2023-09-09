import { NextApiRequest, NextApiResponse } from "next";

const mongoose = require('mongoose');

const productSchema = require('@/lib/models/productModel');
const dbConnect = require('@/utils/connect');

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  try {
    await dbConnect();
    const body = req.body;
    const method = req.method;
    const [product] = await productSchema.find({ title: body.title });

    if ( !product) {
      const newProduct = await productSchema.create({
        title: body.title,
        description: body.description,
        category: body.category,
        price: body.price,
        quantityInStock: body.stock,
        brand: body.brand,
        imageUrl: body.img,
        rating: body.rating,
      });
      res.status(200).json({ newProduct }); //   const [user] = await Admin.find({ email: body.email });
    }else if(product){
      res.status(200).json({ product }); //   const [user] = await Admin.find({ email: body.email });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

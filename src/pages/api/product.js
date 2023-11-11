import { log } from 'console';
import { BSON } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import multiparty from 'multiparty';
import util from 'util';
import fs from 'fs';

const mongoose = require('mongoose');

const productSchema = require('@/lib/models/productModel');
const dbConnect = require('@/services/DBconnect');

import multer from 'multer';
import path from 'path';

// Define the storage engine

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

export default async function handler(req, res) {
  try {
    await dbConnect();

    const method = req.method;
    console.log('🚀 ~ file: product.ts:16 ~ method:', method);

    if (method === 'GET') {
      const allProducts = await productSchema.find({}, { __v: 0 });
      // console.log('🚀 ~ file: product.ts:20 ~ allProducts:', allProducts);

      res.status(200).json({ allProducts });
    }
    if (method === 'POST') {
      upload.single('image')(req, res, async (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error uploading file' });
        }
        const body = req.body;
        console.log('🚀 ~ file: product.js:46 ~ handler ~ body:', body);

        const title = body.title;
        console.log('🚀 ~ file: product.js:47 ~ handler ~ title:', title);

        const [product] = await productSchema.find({ title: body.title });
        console.log('🚀 ~ file: product.ts:29 ~ product:', product);
        if (product) {
          console.log(`there is already a product in this title ${product.id}`);
          fs.unlinkSync(req.file.path);
          return res.status(400).json({ error: 'Product already exists' });
        }

        const imagePath = `/public/uploads/${req.file.filename}`;

        const newProduct = await productSchema.create({
          title: body.title,
          description: body.description,
          category: body.category,
          price: body.price,
          quantityInStock: body.quantityInStock,
          brand: body.brand,
          imageUrl: imagePath /* file.filename */, // Store the file path in your database
          rating: body.rating,
        });

        res.status(200).json({ newProduct });
      });
    } else if (method === 'DELETE') {
      const id = req.query.ID;
      const test = await productSchema
        .find({ _id: new BSON.ObjectId(id) })
        .deleteOne();

      res.json({ success: true });
    } else if (method === 'PUT') {
      const body = req.body;
      const id = req.body._id;
      console.log('🚀 ~ file: product.ts:53 ~ body:', new BSON.ObjectId(id));

      const update = await productSchema
        .find({ _id: new BSON.ObjectId(id) })
        .updateOne({ ...body });
      console.log('🚀 ~ file: product.ts:58 ~ update:', update);
      res.status(200).json({ update });
    }
  } catch (error) {
    console.error('Error:', req.url, error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

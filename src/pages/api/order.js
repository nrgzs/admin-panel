import { BSON } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const orderSchema = require('@/lib/models/orderModel');
const dbConnect = require('@/services/DBconnect');

export default async function handler(req, res) {
  try {
    await dbConnect();
    const body = req.body;
    const method = req.method;

    const [order] = await orderSchema.find({ name: body.name });
    const allOrders = await orderSchema.find({}, { __v: 0 });

    if (method === 'GET') {
      res.status(200).json({ allOrders});
    } else if (method === 'POST') {
      // if (!order) {
        console.log(body);
      const newOrder = await orderSchema.create({
        status: body.status,
        customer_id: body.customer_id,
        total: body.total,
        billing: {
          first_name: body.billing.first_name,
          last_name: body.billing.last_name,
          company: body.billing.company,
          address_1: body.billing.address_1,
          address_2: body.billing.address_2,
          city: body.billing.city,
          state: body.billing.state,
          postcode: body.billing.postcode,
          country: body.billing.country,
        },
      });
      res.status(200).json({ newOrder });
      // } else if (order) {
      //   res.status(200).json({ order });
      // }
    } else if (method === 'DELETE') {
      const id = req.query.ID;
    

      const test = await orderSchema
        .find({ _id: new BSON.ObjectId(id) })
        .deleteOne();
    

      res.json({ success: true });
    } else if (method === 'PUT') {
      const body = req.body;
      const id = req.body._id;

      const update = await orderSchema
        .find({ _id: new BSON.ObjectId(id) })
        .updateOne({ ...body });

      res.status(200).json({ update });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

import connectMongo from '../../utils/connectMongo'
import Product from '../../models/productModel'

//
export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  console.log('Connection established')

  if (method === 'GET') {
    const products = await Product.find({})
    if (!products) {
      return res.status(400).json({ success: false })
    }
    return res.status(200).json({ success: true, data: products })
  }
}

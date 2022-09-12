import connectMongo from "../../utils/connectMongo";
import Product from "../../models/productModel";

//
export default async function handler(req, res) {
  const { method } = req;

  await connectMongo();

  console.log("Connection established");

  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        if (!products) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(404).json({ success: false });
      }
      break;
    case "POST":
      try {
        const newProduct = await Product.create(req.body);
        res.status(203).json({ success: true, message: "Product created!" });
      } catch (error) {
        res.status(404).json({ success: false });
      }
      break;

    default:
      res.status(404).json({ success: false });
      break;
  }
}

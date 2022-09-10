import mongoose, { Schema, model, models, Document } from "mongoose";

// // 1. Create an interface representing a document in MongoDB
// export interface IProduct {
//   name: string;
//   brand: string;
//   price: number;
//   quantity: number;
//   size: string;
//   description: string;
//   images: [];
// }

// 2. Create a Schema corresponding to the document interface
const ProductSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  quantity: Number,
  size: String,
  description: String,
  images: Array,
  reference: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

import foodModel from "../models/foodModel.js";
import fs from "fs";


const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
   
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
    hotelId:req.body.userId
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error", error: error });
  }
};
// API for list of all food  
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}).populate("hotelId","hotelName");
   
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// API for list of food server by particular admin 
const listFoodadmin = async (req, res) => {
  try {
    const foods = await foodModel.find({hotelId:req.body.userId}).populate("hotelId","hotelName");
   
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood ,listFoodadmin};

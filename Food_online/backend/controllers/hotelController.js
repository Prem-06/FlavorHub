import hotelModel from "../models/hotelModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};


const registerHotel = async (req, res) => {
  const { ownerName,hotelName, password, email,address,phone } = req.body;

  try {
   
    const exists = await hotelModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Hotel already exists!" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email!" });
    }

    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Please enter a strong password!",
      });
    }
    if (phone.length != 10) {
      return res.json({
        success: false,
        message: "Please enter valid Phone no!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newHotel = new hotelModel({
      ownerName: ownerName,
      email: email,
      password: hashedPassword,
      address:address,
      hotelName:hotelName,
      phone:phone
    });

    const hotel = await newHotel.save();
    const token = createToken(hotel._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error!" });
  }
};


const loginHotel = async (req, res) => {
  const { email, password } = req.body;

  try {
   
    const hotel = await hotelModel.findOne({ email });
    if (!hotel) {
      return res.json({ success: false, message: "Hotel doesn't exists!" });
    }

    const isMatch = await bcrypt.compare(password, hotel.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials!" });
    }

    const token = createToken(hotel._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const hotelDetail = async (req, res) => {
  try {
    const hotel = await hotelModel.findById( req.body.userId);
    if (!hotel) {
      return res.json({ success: false, message: "Hotel doesn't exist!" });
    }
          hotel.password=null;
    return res.json({ success: true, hotelDetail: hotel });
  } catch (error) {
    
    console.log("error");
    res.json({ success: false, message: "Error" });
  }
};


export { loginHotel, registerHotel,hotelDetail };

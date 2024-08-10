import express from "express";
import { hotelDetail, loginHotel,registerHotel } from "../controllers/hotelController.js";
import authMiddleware from '../middleware/auth.js'
const hotelRouter = express.Router();

hotelRouter.post("/register", registerHotel);
hotelRouter.post("/login", loginHotel);
hotelRouter.get("/hotelDetail",authMiddleware, hotelDetail);

export default hotelRouter;
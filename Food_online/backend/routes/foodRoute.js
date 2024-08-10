import express from "express";
import {
  addFood,
  listFood,
  removeFood,
  listFoodadmin
} from "../controllers/foodController.js";
import multer from "multer";
import authMiddleware from "../middleware/auth.js";

const foodRouter = express.Router();
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add",upload.single("image"),authMiddleware, addFood);
foodRouter.get("/list", listFood);
foodRouter.get("/listadmin",authMiddleware, listFoodadmin);
foodRouter.post("/remove", removeFood);

export default foodRouter;

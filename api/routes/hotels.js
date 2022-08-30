import express from "express";
import {
  countByCity,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotel-controller.js";
import { verifyAdmin } from "../utils/ verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/find/:id", verifyAdmin, deleteHotel);

// GET

router.get("/:id", getHotel);

// GET ALL

router.get("/", getAllHotels);

router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotels);

export default router;

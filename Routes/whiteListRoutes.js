import express from "express";
import {
  acceptWhiteList,
  createWhiteList,
  deleteWhiteList,
  getAllWhiteList,
  rejectWhiteList,
} from "../Controllers/whiteListController.js";
import { protect } from "../Middlewares/authMiddleWare.js";

const router = express.Router();

router.post("/", protect, createWhiteList);
router.get("/", protect, getAllWhiteList);
router.put("/accept/:id", protect, acceptWhiteList);
router.put("/reject/:id", protect, rejectWhiteList);
router.delete("/:id", protect, deleteWhiteList);

export default router;

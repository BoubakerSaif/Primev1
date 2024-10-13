import express from "express";
import { protect } from "../Middlewares/authMiddleWare.js";
import {
  acceptBetaApp,
  createBetaApp,
  getAllBetaApps,
  rejectBetaApp,
} from "../Controllers/betaControllers.js";

const router = express.Router();

router.post("/", protect, createBetaApp);
router.get("/", protect, getAllBetaApps);
router.put("/accept/:id", protect, acceptBetaApp);
router.put("/reject/:id", protect, rejectBetaApp);
// router.delete("/:id", protect);

export default router;

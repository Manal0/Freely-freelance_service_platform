import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
  getGigsByUserId
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);
router.get('/:userId', getGigsByUserId);
export default router;
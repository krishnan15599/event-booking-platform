import { Router } from "express";
import {
  authenticateToken,
  authorizeAdmin,
} from "../middleware/auth.middleware";
import {
  createEvent,
  listEvents,
  getEventDetails,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller";

const router = Router();

// Public routes
router.get("/", listEvents);
router.get("/:id", getEventDetails);

// Protected routes (Admin only)
router.post("/", authenticateToken, authorizeAdmin, createEvent);
router.put("/:id", authenticateToken, authorizeAdmin, updateEvent);
router.delete("/:id", authenticateToken, authorizeAdmin, deleteEvent);

export default router;

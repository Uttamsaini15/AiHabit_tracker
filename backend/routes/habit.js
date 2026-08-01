import express from "express";
import {
    getHabit,
    createHabit,
    updateHabit,
    deleteHabit,
    archiveHabit,
    reorderHabits,
} from "../controller/habitController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.get("/", getHabit);
router.post("/", createHabit);
router.put("/reorder", reorderHabits);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);
router.put("/:id/archive", archiveHabit);

export default router;
import express from "express";
import addData from "../controllers/addData";
const router = express.Router();
router.post("/addData",addData);
export default router
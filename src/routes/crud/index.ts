import express from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();


router.post("/content", (req, res) => {

})

router.get("/content", (req, res) => {

})

router.delete("/content", (req, res) => {

})

router.post("/brain/share", (req, res) => {

})

router.post("/brain/:shareLink", (req, res) => {

})

export default router;


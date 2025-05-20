import { Router } from "express";

const router = Router();

router.post("/create", (req, res) => {res.send({message: "create"});});
router.put("/progress", (req, res) => {res.send({message: "progress"});});
router.put("/complete", (req, res) => {res.send({message: "complete"});});
router.put("/cancel", (req, res) => {res.send({message: "cancel"});});
router.put("/cancel-all", (req, res) => {res.send({message: "cancel-all"});});
router.get("/", (req, res) => {res.send({message: "get"});});

export default router;
import express, { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();
const feedController = require("../controllers/feedController");

router.get("/", feedController.getFeed);

export default router;

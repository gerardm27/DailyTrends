import express, { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();
import feedController from "../controllers/feedController";

router.get("/", feedController.getFeed);


export default router;
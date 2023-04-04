import express, { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();
import feedController from "../controllers/feedController";

// GET /api/feed/ --> Get all feeds
router.get("/", feedController.getFeed);

// POST /api/feed/ --> Add a new feed
router.post("/", feedController.addToFeed);

// PUT /api/feed/:url --> Update a feed
router.put("/:url", feedController.updateFeed);

// DELETE /api/feed/:url --> Delete a feed
router.delete("/:url", feedController.deleteFeed);

// GET /api/feed/populate --> Populate today's feed. Redirects to /api/feed/
router.get("/populate", feedController.populateTodayFeed);

export default router;
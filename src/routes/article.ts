import express, { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();
import articleController from "../controllers/articleController";

router.get("/", articleController.getArticle);
//router.post("/", articleController.addArticle);

export default router;
import express, { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();
const articleController = require("../controllers/articleController");

router.get("/", articleController.getArticle);

export default router;

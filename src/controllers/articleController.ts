import { Request, Response } from "express";

export const getArticle = (req: Request, res: Response) => {
  console.log("getArticle");
};

export const addArticle = (req: Request, res: Response) => {
  console.log("addArticle");
};

export default {
  getArticle,
  addArticle,
};
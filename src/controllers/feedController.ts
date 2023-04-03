import {ErrorRequestHandler, Request, Response, NextFunction} from "express";
import feedService from "../services/feed.service";

const getFeed = async (req: Request, res: Response) => {
    try {
        const feed = await feedService.getFeed();
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};


export default {
    getFeed,
};
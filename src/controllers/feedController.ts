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

const getFeedByURL = async (req: Request, res: Response) => {
    try {
        const url = req.params.url;
        const feed = await feedService.getFeedByURL(url);
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

const updateFeed = async (req: Request, res: Response) => {
    try {
        const feed = await feedService.updateFeed(req.params.url, req.body);
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

const addToFeed = async (req: Request, res: Response) => {
    try {
        const feed = await feedService.addToFeed(req.body);
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

const deleteFeed = async (req: Request, res: Response) => {
    try {
        await feedService.deleteFeed(req.params.url);
        res.status(204).json({message: 'No Content'});
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

const populateTodayFeed = async (req: Request, res: Response) => {
    try {
        const feed = await feedService.populateTodayFeed();
        res.redirect('/feed');
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};


export default {
    getFeed,
    updateFeed,
    addToFeed,
    deleteFeed,
    populateTodayFeed
};
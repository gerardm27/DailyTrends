import {ErrorRequestHandler, Request, Response, NextFunction} from "express";
import feedService from "../services/feed.service";

// Obtener el feed de hoy
const getFeed = async (req: Request, res: Response) => {
    try {
        const feed = await feedService.getFeed();
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

// Obtener un feed por URL
const getFeedByURL = async (req: Request, res: Response) => {
    try {
        const url = req.params.url;
        const feed = await feedService.getFeedByURL(url);
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

// Actualizar un feed
const updateFeed = async (req: Request, res: Response) => {
    try {
        const feed = await feedService.updateFeed(req.params.url, req.body);
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

// Añadir un feed
const addToFeed = async (req: Request, res: Response) => {
    try {
        const feed = await feedService.addToFeed(req.body);
        res.status(200).json(feed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

// Eliminar un feed
const deleteFeed = async (req: Request, res: Response) => {
    try {
        await feedService.deleteFeed(req.params.url);
        res.status(204).json({message: 'No Content'});
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

// Añadir todos los feeds de hoy
const populateTodayFeed = async (req: Request, res: Response) => {
    try {
        const newFeed = await feedService.populateTodayFeed();
        res.status(200).json(newFeed);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};


export default {
    getFeed,
    getFeedByURL,
    updateFeed,
    addToFeed,
    deleteFeed,
    populateTodayFeed
};
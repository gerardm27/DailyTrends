import {addToFeed, deleteFeed, getFeed, populateTodayFeed, updateFeed, getFeedByURL} from './feedController';

export default {
    paths: {
        '/api/feed/': {
            ...getFeed,
            ...addToFeed
        },
        '/api/feed/{url}': {
            ...updateFeed,
            ...getFeedByURL,
            ...deleteFeed
        },
        '/api/feed/populate': {
            ...populateTodayFeed
        }
    }
}
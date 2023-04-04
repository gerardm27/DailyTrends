import addToFeed from './feedController/addToFeed';
import deleteFeed from './feedController/deleteFeed';
import getFeed from './feedController/getFeed';
import populateTodayFeed from './feedController/populateTodayFeed';
import updateFeed from './feedController/updateFeed';
import getFeedByURL from './feedController/getFeedByURL';

export default {
    paths: {
        '/api/feed/': {
            ...getFeed,
            ...addToFeed,
        },
        '/api/feed/{url}': {
            ...getFeedByURL,
            ...updateFeed,
            ...deleteFeed,
        },
        '/api/feed/populate': {
            ...populateTodayFeed,
        },
    }
}
import Feed from '../models/feed';

const feedService = {
    //Obtener el feed de hoy
    getFeed: async () => {
        const date = new Date();
        console.log(date)
        //const feed = await Feed.find({date: date});
        return date;
    },

    populateTodayFeed: async () => {
        console.log("Populating today's feed")
        //Web scraping code
    }
}

export default feedService;

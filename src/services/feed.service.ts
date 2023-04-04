import Feed from '../models/feed';
import axios, { AxiosError } from 'axios';
import jsdom from 'jsdom';
const sources = require('../../utils/sources.json');
const { JSDOM } = jsdom;

const feedService = {
  //Obtener el feed de hoy
  getFeed: async () => {
    const feeds = await Feed.find();
    return feeds;
  },

  getFeedByURL: async (url: String) => {
    const feed = await Feed.findOne({url: url});
    return feed;
  },

  updateFeed: async (url: String, newFeed: Object) => {
    const feed = await Feed.findOneAndUpdate({url: url}, newFeed);
    return feed;
  },

  addToFeed: async (newFeed: Object) => {
    const feed = await Feed.create(newFeed);
    return feed;
  },

  deleteFeed: async (url: String) => {
    await Feed.findOneAndDelete({url: url});
  },
  
  populateTodayFeed: async () => {
    let today = new Date().toISOString().slice(0,10);
    let HTMLData: any;
    let news_sources = sources['sources']
    for (const source of news_sources) {
        HTMLData = await axios
        .get(source)
        .then(res => res.data)
        .catch((error: AxiosError) => {
          console.error(`There was an error with ${error.config.url}.`);
          console.error(error.toJSON());
        });
        const dom = new JSDOM(HTMLData);
        parseIntoFeed(dom.window.document, source, today);
    }
    return HTMLData;
  },
}

function parseIntoFeed(HTMLData: any, source: String, today: String) {
    const articleArray = Array.from(HTMLData.querySelectorAll('article')); 
    articleArray.slice(0,5).forEach((article: any) => {
      try {
        let url = article.querySelector('a').href;
        let feedExists = checkIfExistsFeed(url);
        if(!feedExists) {
          console.log('Creating new feed');
          Feed.create({
            date: today,
            title: article.querySelector('h2').textContent,
            url: article.querySelector('a').href,
            source: source
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
}

async function checkIfExistsFeed(url: String): Promise<Boolean> {
  console.log("URL: " + url)
  let feedExists = false;
  await Feed.findOne({url: url}).then((feed: any) => {
    console.log("FEED: " + feed);
    if (feed) {
      feedExists = true;
    } 
  });
  return feedExists;
}

export default feedService;


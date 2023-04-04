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

  // Obtener un feed por URL
  getFeedByURL: async (url: String) => {
    const feed = await Feed.findOne({url: url});
    return feed;
  },

  // Actualizar un feed
  updateFeed: async (url: String, newFeed: Object) => {
    const feed = await Feed.findOneAndUpdate({url: url}, newFeed);
    return feed;
  },

  // Añadir un feed
  addToFeed: async (newFeed: Object) => {
    const feed = await Feed.create(newFeed);
    return feed;
  },

  // Eliminar un feed
  deleteFeed: async (url: String) => {
    await Feed.findOneAndDelete({url: url});
  },
  
  // Añadir todos los feeds de hoy
  populateTodayFeed: async () => {
    let newFeed: any;
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
        newFeed = parseIntoFeed(dom.window.document, source, today);
    }
    return newFeed;
  },
}

// Función auxiliar para parsear los feeds
async function parseIntoFeed(HTMLData: any, source: String, today: String) {
    const newFeedArray: any = [];
    const articleArray = Array.from(HTMLData.querySelectorAll('article')); 
    articleArray.slice(0,5).forEach(async (article: any) => {
      try {
        let url = article.querySelector('a').href;
        let feedExists = await checkIfExistsFeed(url);
        if(!feedExists) {
          let newFeed = await Feed.create({
            date: today,
            title: article.querySelector('h2').textContent,
            url: article.querySelector('a').href,
            source: source
          });
          newFeedArray.push(newFeed);
        }
      } catch (error) {
        console.log(error);
      }
    });
    return newFeedArray;
}

// Función auxiliar para comprobar si un feed existe
async function checkIfExistsFeed(url: String): Promise<Boolean> {
  let feedExists: Boolean;
  await Feed.findOne({url: url}).then((feed: any) => {
    feed == null ? feedExists = false : feedExists = true;
  });
  return feedExists;
}

export default feedService;


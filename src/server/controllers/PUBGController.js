const axios = require("axios");
require('dotenv').config();
const API_KEY = process.env.API_KEY;
const BASE_URI = process.env.BASE_URI; // should I keep the base URI in a .env file? I'm using it like a config file... 

/** TODO's:
 * 1. There is probably a better way to organize these functions rather than calling functions inside of 
 * other functions.
 * 2. Cache query results and for each sequential search, pull data from cache. Program hits API once to get all data, and hits cache every time after that...
 * 3. Maybe want to store platform and region as global variables here... We use platform to get AccountId, but then use region in the lifetime stats
 */


/**
 *  Set all the axios defaults that will be consistent for every call to PUBG API.
 * 
 *  example --> 
 * {
 *    baseURL: BASE_URI
 *    headers : {
 *    'Authorization' : 'Bearer' + API_KEY,
 *    'Accept': 'application/vnd.api+json'
 *     }
 * }
 */
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.headers.common['Accept'] ='application/vnd.api+json';
axios.defaults.baseURL = BASE_URI;

/**
 * To query stats, we must first acquire the accountID. We can get this by passing in a username and a platform to the PUBG API /player endpoint.
 * 
 * Input: 'JonnyRaven', 'steam-NA'
 * Output: account.12345678901234abk4nk3jk3n
 * 
 * @param {String} username 
 * @param {String} platformRegion 
 */
 const getAccountId = async (username, platform) => {

  const url = `${platform}/players?filter[playerNames]=${username}`;

  const response = await axios.get( url );
  const accountId = response['data'].data[0].id;

  console.log('Username: ', username)
  console.log('account ID: ', accountId);
  return accountId;

  };

/**
 * This function retrieves all stats for all seasons by querying the /lifetime PUBG API endpoint.
 * 
 * Input: 'JonnyRav3n', 'steam-NA'
 * Output:
 * 
 *  gameModeStats: {
 *    duo: {...},
 *    duo-fpp: {...},
 *    solo: {...},
 *    solo-fpp: {...},
 *  }
 * 
 * @param {String} username
 * @param {String} platformRegion
 */
const getLifetimeStats = async (username, platform ) => {

  const accountId = await getAccountId(username, platform);
  const url = `${platform}/players/${accountId}/seasons/lifetime`;

  const response = await axios.get( url );
  const lifetimeStats = response.data.data.attributes;  

  console.log('lifetimeStats response -->', lifetimeStats)
  return lifetimeStats;
};

module.exports = { getAccountId, getLifetimeStats };
const axios = require('axios');

const gainer = async () => {
    console.log('1');
  let config = {
    method: 'get',
    url: 'https://www.nseindia.com/api/liveanalysis/gainers/allSec',
  };
console.log(config);
  const link = await axios.request(config).then(response => response.data).catch((error) => {
      throw new Error(error, 400);
    });
    console.log(link.gainers);
  return link.gainers;
};

const looser = async () => {
    let config = {
        method: 'get',
        url: 'https://www.nseindia.com/json/option-chain/option-chain.json',
      }
  const link = await axios.request(config).then(response => response.data).catch((error) => {
      throw new Error(error, 400);
    });
    console.log(link.gainers);
  return link.gainers;
};


module.exports = {
    gainer,
    looser,
};

const fetch = require('node-fetch')
const request = require('request')
const cheerio = require('cheerio')

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const NotionDatabase = (params) => {
  const page = params.page || ''
  const view = params.view || ''
  const url = `https://www.notion.so/${page}?v=${view}`
  console.log('url', url)

  // Attempt #1: Use fetch
  // fetch(url).then(function(data) {
  //   console.log('data', data)
  // })

  // Attempt #2: Use request and cheerio
  //   request(url, function(err, resp, body) {
  //     if (err)
  //         throw err;
  //     let $ = setTimeout(cheerio.load(body), 5000);
  //     console.log(body);
  //     // TODO: scraping goes here!
  // });

  // Attempt #3: Use Nightmare
  nightmare
  .goto(url)
  // .wait(3000)
  // .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
}

 module.exports = NotionDatabase

NotionDatabase({page: 'ca92f19dce7444d495f423d93290eee0', view: 'f5b447239bcf4d75bccb372428b76e20'})

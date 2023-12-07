import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

let Parser = require('rss-parser');
let parser = new Parser();

app.get('/rss/:lang', async (req, res) => {
  let lang = req.params.lang;
  let rss = '';
  if(lang === 'zh'){
    rss = 'https://www.news.gov.hk/tc/categories/finance/html/articlelist.rss.xml';
  }
  if(lang === 'cn'){
    rss = 'https://sc.news.gov.hk/TuniS/www.news.gov.hk/tc/categories/finance/html/articlelist.rss.xml';
  }  
  if(lang === 'en'){
    rss = 'https://www.news.gov.hk/en/categories/finance/html/articlelist.rss.xml';
  }
  if(!rss) return res.status(404).end();
  let feed = await parser.parseURL(rss);
  res.status(200).send(JSON.stringify(feed.items));
});

app.get('/graph/:lang', async(req, res) => {
  try {
    const headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`
    };
    const requestBody = {
      query: `query posts {
        posts(stage: PUBLISHED, where: {languages: ${req.params.lang}}, orderBy: date_DESC) {
          date
          slug
          title
        }
      }`,
      variables: {}
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    };
    const response = await (await fetch(process.env.HYGRAPH_URL, options)).json();
    res.status(200).send(JSON.stringify(response?.data.posts));
  }
  catch (err) {
    res.status(200).send(JSON.stringify([]));
  }
})

app.get('/graph/slug/:slug', async(req, res) => {
  try {
    const headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`
    };
    const requestBody = {
      query: `query post {
        post(where: {slug: "${req.params.slug}"}, stage: PUBLISHED) {
          content {
            html
          }
          date
          slug
          title
        }
      }`,
      variables: {}
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    };
    const response = await (await fetch(process.env.HYGRAPH_URL, options)).json();
    res.status(200).send(JSON.stringify(response?.data.post));
  }
  catch (err) {
    res.status(200).send(JSON.stringify([]));
  }
})

module.exports = app;
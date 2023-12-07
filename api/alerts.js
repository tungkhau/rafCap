import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

app.get('/graph/:lang', async(req, res) => {
  try {
    const headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`
    };
    const requestBody = {
      query: `query pages {
        pages(stage: PUBLISHED, where: {languages: ${req.params.lang}}, orderBy: date_DESC) {
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
    res.status(200).send(JSON.stringify(response?.data.pages));
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
      query: `query page {
        page(where: {slug: "${req.params.slug}"}, stage: PUBLISHED) {
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
    res.status(200).send(JSON.stringify(response?.data.page));
  }
  catch (err) {
    res.status(200).send(JSON.stringify([]));
  }
})

module.exports = app;
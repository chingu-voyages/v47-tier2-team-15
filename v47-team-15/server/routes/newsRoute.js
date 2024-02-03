const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

//The fromDate parameter allows searching for articles up to one month old.
//For instance, if today is the 1st of February 2024, the earliest date for 'fromDate' should be 2024-01-01.

//Example API requests:
//https://newsapi.org/v2/everything?q=crpto&from=$2024-01-05&sortBy=publishedAt&apiKey=${apiKey}&searchin=title,content

router.get("/", async (req, res) => {
  try {
    const { fromDate } = req.query;
    const apiKey = process.env.NEWS_API_KEY;
    const news = await newsController.getNews(fromDate, apiKey);
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

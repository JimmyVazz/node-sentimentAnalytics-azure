const express = require('express');
const router  = express.Router();
const {sentimentAnalysis} = require('../useCases/textAnalytics')
const { TextAnalyticsClient, TextAnalyticsApiKeyCredential } = require("@azure/ai-text-analytics");

//Autentiacion
const textAnalyticsClient = new TextAnalyticsClient(process.env.endpoint,  new TextAnalyticsApiKeyCredential(process.env.key));
/* GET home page */
router.get('/', async (req, res, next) => {
  const data = await sentimentAnalysis(textAnalyticsClient)
  res.json({data})
});

module.exports = router;

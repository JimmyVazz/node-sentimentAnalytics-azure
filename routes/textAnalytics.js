const express = require('express');
const router  = express.Router();
//Dependencias Azure
const { TextAnalyticsClient, TextAnalyticsApiKeyCredential } = require("@azure/ai-text-analytics");

//Autentiacion
const textAnalyticsClient = new TextAnalyticsClient(process.env.endpoint,  new TextAnalyticsApiKeyCredential(process.env.key));

router.get('/', async (req, res, next) => {
 
})

module.exports = router;
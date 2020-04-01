const express = require('express');
const router  = express.Router();
//Casos de uso
const {sentimentAnalysis} = require('../useCases/sentimentAnalysis')
const {entityRecognition} = require('../useCases/namedEntityRecognition')
const {languageDetection} = require('../useCases/languageDetection')
const {entityPiiRecognition} = require('../useCases/keyPhraseExtraction')

//Dependencias Azure
const { TextAnalyticsClient, TextAnalyticsApiKeyCredential } = require("@azure/ai-text-analytics");

//Autenticacion
const textAnalyticsClient = new TextAnalyticsClient(process.env.endpoint,  new TextAnalyticsApiKeyCredential(process.env.key));

//Endpoint para el analisis de sentimientos
/**
 * 
 */
router.get('/sentimentAnalysis', async (req, res, next) => {
 const data = await sentimentAnalysis(textAnalyticsClient)
 res.json({data})
})
//Endpoint para el reconocmiento de entidades
/**
 * 
 */
router.get('/entityRecognition', async (req, res, next) => {
 const data = await entityPiiRecognition(textAnalyticsClient)
 res.json({data})
})
//Endpoint para detectar idioma
/**
 * 
 */
router.get('/languageDetection', async (req, res, next) => {
  const data = await languageDetection(textAnalyticsClient)
  res.json({data})
})
//Endpoint para detectar letras en entidades
/**
 * 
 */
router.get('/entityPiiRecognition', async (req, res, next) => {
  const data = await entityRecognition(textAnalyticsClient)
  res.json({data})
})

module.exports = router;
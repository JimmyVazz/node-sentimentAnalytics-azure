const { TextAnalyticsClient, TextAnalyticsApiKeyCredential } = require("@azure/ai-text-analytics");

async function entityRecognition(client){

  const entityInputs = [
      "Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800",
      "La sede principal de Microsoft se encuentra en la ciudad de Redmond, a 21 kilómetros de Seattle."
  ];
  const entityResults = await client.recognizeEntities(entityInputs);
  return entityResults

}
module.exports = {
  entityRecognition
}
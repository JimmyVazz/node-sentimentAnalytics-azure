const { TextAnalyticsClient, TextAnalyticsApiKeyCredential } = require("@azure/ai-text-analytics");

async function entityPiiRecognition(client){

  const entityPiiInput = [
      "Insurance policy for SSN on file 123-12-1234 is here by approved."
  ];
  const entityPiiResults = await client.recognizePiiEntities(entityPiiInput);

  return entityPiiInput
}

module.exports = {
  entityPiiRecognition
}
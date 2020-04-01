const { TextAnalyticsClient, TextAnalyticsApiKeyCredential } = require("@azure/ai-text-analytics");


 async function sentimentAnalysis(client){

  const sentimentInput = [
      "I had the best day of my life. I wish you were there with me."
  ];
  const sentimentResult = await client.analyzeSentiment(sentimentInput);
  return sentimentResult
}

module.exports = {
  sentimentAnalysis
 }

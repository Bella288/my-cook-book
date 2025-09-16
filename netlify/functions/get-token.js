// netlify/functions/get-token.js
exports.handler = async function(event, context) {
  // Get the GitHub token from environment variables
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GitHub token not configured' })
    };
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify({ token: token })
  };
};

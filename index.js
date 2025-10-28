const axios = require("axios");

async function checkSite(url) {
  try {
    const response = await axios.get(url);
    console.log(\`✅ Site acessível - Status: \${response.status}\`);
  } catch (error) {
    console.log(\`❌ Erro: \${error.message}\`);
  }
}

checkSite("https://google.com");

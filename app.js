//https://newsapi.org/
// Your API key is: 1c0731276dfc4b2383d0973707a5903e

console.log(axios);

const apiKey = '1c0731276dfc4b2383d0973707a5903e'; 

// Function to fetch top headlines
async function axiosTopHeadlines() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${"1c0731276dfc4b2383d0973707a5903e"}`;

  
  try {
    const response = await axios(url);
    const data = response.data;
   // const data = await response.json();
    
    // Display the articles and description
    if (data.status === 'ok') {
      const articles = data.articles;
      let articlesHTML = '';
      
      articles.forEach(article => {
        articlesHTML += `
          <div>
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
          </div>
        `;
      });
      
      document.getElementById('news').innerHTML = articlesHTML;
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

// Fetch top headlines on page load
axiosTopHeadlines();
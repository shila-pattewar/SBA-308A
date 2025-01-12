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
    console.log(response.data);
   // const data = await response.json();
    
    // Display the articles and description
    if (data.status === 'ok') {
      const articles = data.articles;
      let articlesHTML = '';
      
      articles.forEach(article => {
        articlesHTML += `
          <div>
            <h4><strong>Author:</strong> ${article.author}</h4>
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p><strong>Description:</strong> ${article.description}</p>
          </div>
        `;
      });
      
      document.getElementById('news').innerHTML = articlesHTML;
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

function createPostDiv(post) {
    const div = document.getElementById('posts');
  
    div.innerHTML = `
      <h1>${post.author}</h1>
      <p>${post.description}</p>
      <p>${post.title}</p>
    `;
  }



  axios.post('https://jsonplaceholder.typicode.com/posts', {
    author: 'Test Author',
    description: 'Test Description',
    title: 'Test Title',
  })
  .then((res) => console.log(res.data));


// Posting Data with Fetch
const form = document.getElementById('createPost');
const author = document.getElementById('author');
const description = document.getElementById('description');
const title = document.getElementById('title');

form.addEventListener('submit', createPost);

async function createPost(evt) {
  evt.preventDefault();
  const post = {
    author: author.value,
    description: description.value,
    title: title.value,
  };

  try {
    const OPTIONS = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    };

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      OPTIONS
    );
    const data = await response.json();
    createPostDiv(data);
  } catch (err) {
    console.log(err);
  }
}

function createPostDiv(post) {
  const div = document.getElementById('posts');

  div.innerHTML = `
    <h1>${post.author}</h1>
    <p>${post.description}</p>
    <p>${post.title}</p>
  `;
}


// Fetch top headlines on page load
axiosTopHeadlines();
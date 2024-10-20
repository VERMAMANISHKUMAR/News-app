
import { useEffect, useState } from 'react';
//import { useState } from 'react';
import './App.css';
import News from './News'


function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [category,setCategory]=useState("us");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
`https://newsapi.org/v2/top-headlines?country=${category}&apiKey=2d9a8ccd142548e6929243e005ac0d38`
        );
        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="App">
      <header className="header">
      <div className='news-logo'>
<img src="img/news logo.jpeg" alt="Logo is missing"/>
    </div>
    <div>
      <h1>News App</h1>
    </div>
        <ul className="header-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">New News</a>
          </li>
          <li>
            <a href="#">Let's News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <input type="text" placeholder="Search News" />
      </header>

      <section className="news-articles">
        {newsArticles.map((article) => (
          <News key={article.url} article={article} />
        ))}
      </section>
    </div>
  );
}

export default App;

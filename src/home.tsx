import NewsCard from "./NewsCard";
import "./Home.css";
import searchIcon from "./search.svg";
// import Login from "./login";
import { useEffect, useState } from "react";

const API_URL = "http://hn.algolia.com/api/v1/search?";


const Home  = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    searchNews({ query: " " });
  }, []);
  const searchNews = async ({ query }: { query: string }) => {
    const response = await fetch(`${API_URL}query=${query}`);
    const data = await response.json();
    setNews(data.hits);
  };
  return (
    
    <div>
        <button className="logout" onClick={handleClick}>Logout</button>
        
    <div className="app">
        
      <h1>TechnoSapien</h1>
      <div className="search">
        <input
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchNews({ query: search })}
        />
      </div>
      {news?.length > 0 ? (
        <div className="container">
          {news.map((newnews) => (
            <NewsCard newnews={newnews} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>OOPS !! No newsfound related to this topic!!</h2>
        </div>
      )}
      )
    </div>
    </div>
  );
};

export default Home;

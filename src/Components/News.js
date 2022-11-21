import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  let page=1;
  
  async function firstNewsUpdate() {
    props.onProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let myObject = await fetch(url);
    props.onProgress(20);
    let myParsedJson = await myObject.json();
    props.onProgress(50);
    // let myParsedJson = await sample;
    setArticles(myParsedJson.articles);
    setTotalResults(myParsedJson.totalResults);
    setLoading(false);
    props.onProgress(100);
    console.log(url);
  }
  async function newsUpdate() {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let myObject = await fetch(url);
    let myParsedJson = await myObject.json();
    // let myParsedJson = await sample;
    setArticles(articles.concat(myParsedJson.articles));
    setTotalResults(myParsedJson.totalResults);
    setLoading(false);
    
    console.log(url);
  }
  
  useEffect(() => {
    document.title = `${
      props.category.charAt(0).toUpperCase() +
      props.category.slice(1).toLowerCase()
    } | NewsRabbit`;
    firstNewsUpdate();
    // eslint-disable-next-line
  }, []);
  
  const fetchMoreData = async () => {
    page++;
    newsUpdate();
  };

  return (
    <div className="container">
      <h1 className="text-center text-light" style={{margin:" 5rem 0 2rem 0"}}>
        Top{" "}
        {props.category.charAt(0).toUpperCase() +
          props.category.slice(1).toLowerCase()}{" "}
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // next={null}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row container">
          {articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title}
                  desciption={element.description}
                  url={element.url}
                  imgUrl={element.urlToImage}
                  author={element.author ? element.author : "Unknown"}
                  source={element.source.name}
                  time={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
News.defaultProps = {
  category: "sports",
  country: "in",
  pageSize: 20,
};

News.propTypes = {
  apiKey: PropTypes.string,
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
  onProgress: PropTypes.func,
};

import React, {useContext} from "react";
import {NewsContext} from "./NewsContext"
import NewsArticle from "./NewsArticle"
import loading from "./Spinner-2.gif"
import{Link} from "react-router-dom"
// import PropTypes from 'prop-types'

//   defaultProps={
//     country: 'in',
//     category:'general',
//     pageSize:8,
//   }
//   PropTypes={
//     country:PropTypes.string,
//     pageSize: PropTypes.number,
//     category:PropTypes.string,
//   }


function News(){
 
    const {data}=useContext(NewsContext);
    console.log(data);
    return ( <div>
        <div className="logo">
          <span className="click">The</span><span className="on">News</span>
          <span className="n">EXPRESS</span>
        </div>
        
        <div className="cat">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="sports">Sports</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/technology">Technology</Link></li>
          </ul>
        </div>
        <div className="all-news">
          {data
            ? data.articles.map((news) => (
                <NewsArticle data={news} key={news.url} />
              ))
            : <img src={loading} alt="Loading"></img>}
        </div>
      </div>
    );
}

export default News;
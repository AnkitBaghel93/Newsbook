import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom"

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    
    const capatilzeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(5);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a73331e9b874409c888b9b3e1dbc2ad9&page=${props.page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(50);
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        props.setProgress(70);
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        document.title=`${capatilzeFirstLetter(props.category)} - NewsBook`
    }, [])

    const handlePrevClick = async () => {
        setPage(page - 1);
       await  updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1);
       await  updateNews();
    }


    return (
        <div className="container my-5  ">
         
          <h1 className="text-center">NewsBook -- Top {capatilzeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <div className="row ">
                {!loading && Array.isArray(articles) && articles.map((element) => {

                    return <div className="col-md-4 " key={element.url}>
                        <NewsItem
                            title={element.title ? element.title : ""}
                            description={element.description ? element.description : ""}
                            imageUrl={element.urlToImage}
                            newsUrl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                            source={element.source.name} />
                           </div>
                })}

                <div className=" mb-4 container d-flex justify-content-between ">
                    <button disabled={page <= 1} type="button" className="btn btn-dark " onClick={handlePrevClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>

            </div>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'technology',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News



































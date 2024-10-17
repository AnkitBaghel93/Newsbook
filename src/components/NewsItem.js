import React, { Component } from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3 d-flex flex-wrap">
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded"style={{ height: '520px', display: 'flex', flexDirection: 'column' }}>
        <div >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{  right: '-28px', 
              zIndex: '1' }}>
            {source}   </span>
        </div>
        <img src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/d210/live/c782a6f0-1329-11ef-af25-971241b83106.jpg" : imageUrl} className="card-img-top " alt="..." />
        <div className="card-body  p-3 mb-2 bg-body-secondary flex-grow-1" style={{ overflowY: 'auto' }}>
          <h5 className="card-title" >{title} </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author || "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn  btn-outline-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem;










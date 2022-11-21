import React from "react";

const NewsItem = (props) => {
  let { title, desciption, url, imgUrl, author, time, source } = props;
  return (
    <div>
      <div className="card text-light" style={{ backgroundColor: "#50577A" }}>
        <div>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              position: "absolute",
              right: "-1%",
              top: "-1%",
            }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://media.news9live.com/h-upload/2022/11/16/581818-9744steveneowiseaurorameteordonnalach-sm.jpg"
          }
          style={{ height: "15rem" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title text-warning">{title}</h5>
          <p className="card-text">{desciption}</p>
          <p className="card-text">
            <small className="text-info">
              {author} at {new Date(time).toGMTString()}
            </small>
          </p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

import React from "react";
import "./Videos.css";
import { MdModeEdit, MdDelete } from "react-icons/md";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: "Como fazer Slime",
          canal: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Como fazer Slime",
          canal: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Como fazer Slime",
          canal: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Como fazer Slime",
          canal: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Como fazer Slime",
          canal: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Como fazer Slime",
          canal: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
      ],
    };
  }

  render() {
    const { news } = this.state;

    return (
      <div className="news-feed">
        <h1>Vídeos</h1>
        <div className="news-container">
          {news.map((item, index) => (
            <div className="news-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <h2>{item.title}</h2>
                <p>{item.canal}</p>
              </div>
              <div className="news-actions">
                <button className="edit-button">
                  <MdModeEdit />
                </button>
                <button className="delete-button">
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Videos;

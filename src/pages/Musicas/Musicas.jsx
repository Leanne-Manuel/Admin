import React from "react";
import "./Musicas.css";
import { MdModeEdit, MdDelete } from "react-icons/md";

class Musicas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: "Como fazer Slime",
          artist: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Como fazer Slime",
          artist: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Como fazer Slime",
          artist: "@BiaSantos",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/10/istock-873395522.jpg",
        },
        {
          title: "Versace on the floor",
          artist: "Bruno Mars",
          image:
            "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
        },
        {
          title: "Versace on the floor",
          artist: "Bruno Mars",
          image:
            "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
        },
        {
          title: "Versace on the floor",
          artist: "Bruno Mars",
          image:
            "https://m.media-amazon.com/images/M/MV5BZWI4YmZhM2YtNjcxZS00Yzk3LWEzOTQtODAzYTgzNDUzZWM0XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
        },
      ],
    };
  }

  render() {
    const { news } = this.state;

    return (
      <div className="news-feed">
        <h1>Músicas</h1>
        <div className="news-container">
          {news.map((item, index) => (
            <div className="news-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <h2>{item.title}</h2>
                <p>{item.artist}</p>
              </div>
              <div className="news-actions">
                <button className="edit-button">
                  <MdModeEdit color="black" />
                </button>
                <button className="delete-button">
                  <MdDelete color="black" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Musicas;

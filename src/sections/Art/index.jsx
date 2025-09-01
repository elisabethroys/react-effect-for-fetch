import { useState, useEffect } from "react";

function ArtsSection() {

  const art_url = "https://boolean-uk-api-server.fly.dev/art";
  const artImage_url = "https://boolean-uk-api-server.fly.dev";
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch(art_url);
      const data = await response.json();
      setArtworks(data);
    };
    fetchArtworks();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">{artworks.map((artwork, index) => (
          <li key={index}>
            <div className="frame">
              <img
                src={`${artImage_url}${artwork.imageURL}`}
              />
            </div>
            <h3>{artwork.title}</h3>
            <p>Artist: {artwork.artist}</p>
            <h4>Publication History:</h4>
            <ul>{artwork.publicationHistory.map((item, i) => (
              <li key={i}>{item}</li>
            ))}</ul>
          </li>
        ))}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection

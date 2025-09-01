import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {

  const art_url = "https://boolean-uk-api-server.fly.dev/art";
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
        <ArtList artworks={artworks}/>
      </div>
    </section>
  )
}

export default ArtsSection

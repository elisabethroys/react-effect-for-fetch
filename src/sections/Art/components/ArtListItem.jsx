import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ artwork, index}) {
    const artImage_url = "https://boolean-uk-api-server.fly.dev";

    return (
        <li key={index}>
            <div className="frame">
                <img
                    src={`${artImage_url}${artwork.imageURL}`}
                />
            </div>
            <h3>{artwork.title}</h3>
            <p>Artist: {artwork.artist}</p>
            <PublicationHistoryList publicationHistory={artwork.publicationHistory} />
        </li>
    );
}

export default ArtListItem;

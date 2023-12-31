import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ArtImageTile = ({ art, galleryId }) => {
    return (
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={art.images[0].baseimageurl} alt={art.title} />
        </Link>
    );
};

export default ArtImageTile;

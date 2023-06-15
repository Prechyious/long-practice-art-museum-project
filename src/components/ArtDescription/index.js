import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import "./ArtDescription.css";

export const ArtDescription = ({ gallery }) => {
    const { artId } = useParams();

    const foundArt = gallery.objects.find((art) => art.id === parseInt(artId));
    return (
        <div>
            <Link className="back" to={`/galleries/${gallery.galleryid}`}>
                Back To Gallery
            </Link>
            <Link to={{ pathname: `${foundArt.url}` }} target="_blank">
                <h2>{foundArt.title}</h2>
            </Link>
            <div>
                <p>{foundArt.description}</p>
            </div>
            <div>
                <p>{foundArt.creditline}</p>
            </div>
            <div>
                <p>{foundArt.tecnigue}</p>
            </div>

            <div className="image-wrapper">
                {foundArt.images.map((image) => {
                    return (
                        <img
                            key={image.imageid}
                            src={image.baseimageurl}
                            alt={foundArt.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

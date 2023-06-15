import { useParams, Switch, Route, useRouteMatch } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    const foundGallery = galleries.find(
        (gallery) => gallery.galleryid === parseInt(galleryId)
    );

    const { url } = useRouteMatch();

    return (
        <div>
            {/* <h1>Hello from GalleryView</h1> */}
            <h2> {`${foundGallery.name}`} </h2>
            <Switch>
                <Route exact path={`${url}`}>
                    <div className="image-wrapper">
                        {foundGallery.objects.map((artwork) => {
                            return (
                                <ArtImageTile
                                    key={artwork.id}
                                    art={artwork}
                                    galleryId={galleryId}
                                />
                            );
                        })}
                    </div>
                </Route>
            </Switch>
        </div>
    );
};

export default GalleryView;

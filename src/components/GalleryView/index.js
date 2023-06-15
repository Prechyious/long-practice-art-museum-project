import { useParams, Route, useRouteMatch, Switch } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import { ArtDescription } from "../ArtDescription";

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    const foundGallery = galleries.find(
        (gallery) => gallery.galleryid === parseInt(galleryId)
    );

    const { url } = useRouteMatch();

    return (
        <main className="main">
            <h2 className="gallery-title"> {foundGallery.name} </h2>
            <Switch>
                <Route exact path={url}>
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
                <Route path={`${url}/art/:artId`}>
                    <ArtDescription gallery={foundGallery} />
                </Route>
            </Switch>
        </main>
    );
};

export default GalleryView;

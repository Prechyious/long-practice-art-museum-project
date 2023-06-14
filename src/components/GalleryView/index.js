import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    const foundGallery = galleries.find(
        (gallery) => gallery.galleryid == galleryId
    );
    // console.log(foundGallery);

    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2> {`${foundGallery.name}`} </h2>
        </div>
    );
};

export default GalleryView;

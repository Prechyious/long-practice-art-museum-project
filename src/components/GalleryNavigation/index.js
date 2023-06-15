import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries);
    return (
        <nav>
            <h1 className="title">Galleries</h1>
            <div className="home">
                <NavLink exact to="/">
                    Home
                </NavLink>
            </div>
            <div className="nav-links">
                {galleries.map((gallery) => {
                    console.log(gallery);
                    return (
                        <NavLink
                            key={gallery.id}
                            to={`/galleries/${gallery.galleryid}`}
                            activeClassName="active"
                        >
                            {gallery.name}
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
};

export default GalleryNavigation;

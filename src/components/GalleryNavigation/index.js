import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
    // console.log(galleries);
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to="/" activeClassName="active">
                Home
            </NavLink>
            {galleries.map((gallery) => {
                return (
                    <NavLink
                        exact
                        key={gallery.id}
                        to={`/galleries/${gallery.id}`}
                        activeClassName="active"
                    >
                        {`${gallery.name}`}
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default GalleryNavigation;
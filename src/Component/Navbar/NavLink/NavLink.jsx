import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = () => {
  const links = [
    {
      name: "Movie",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Popular", link: "/popular-movie" },
            { name: "Top Rated", link: "/top-rated-movie" },
            { name: "Now Playing", link: "/now-playing-movie" },
            { name: "Coming Soon", link: "/upcoming-movie" },
          ],
        },
      ],
    },
    {
      name: "TV Show",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Popular", link: "/popular-tvshow" },
            { name: "Top Rated", link: "/top-rated-tvshow" },
            { name: "On The Air", link: "/ontheair-tvshow" },
            { name: "Airing", link: "/airing-tvshow" },
          ],
        },
      ],
    },
    {
      name: "Actor",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <div className="navlinks">
          <h1 className="nav-button" key={link}>{link.name}</h1>
          {link.submenu && (
            <div className="group-link">
              <div className="arrow"></div>
              <div className="dropdown-link">
                {link.sublinks.map((mysublinks) => (
                  <>
                    {mysublinks.sublink.map((movieLink) => (
                      <li className="list-link">
                        <Link to={movieLink.link}>{movieLink.name}</Link>
                      </li>
                    ))}
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLink;

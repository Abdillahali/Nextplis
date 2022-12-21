import React from "react";
import { Link } from "react-router-dom";
import "./FootLink.css";

const FootLink = () => {
  const footLink = [
    {
      id: 1,
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
      id: 2,
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
  ];

  return (
    <>
      <div className="footer-links">
        {footLink.map((link, id) => (
          <div className="footlinks">
            <h4 className="footlink-button" key={id}>
              {link.name}
            </h4>
            {link.submenu && (
              <div className="links">
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
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FootLink;

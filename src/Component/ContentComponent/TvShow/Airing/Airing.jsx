import React, { useEffect, useState } from "react";
import Filter from "../../Filter/Filter";
import { airingTv } from "../../../../Api";
import Wrapper from "../../../Wrapper/Wrapper";

const Airing = () => {
  const [airing, setAiring] = useState([]);

  useEffect(() => {
    airingTv().then((result) => {
      setAiring(result);
    });
  }, []);

  const TvOnTheAir = () => {
    return (
      airing &&
      airing.map((tv, i) => {
        return (
          <Wrapper className="item-wrapper" key={i}>
            <img
              src={`${process.env.REACT_APP_BASEIMAGEURL}${tv.poster_path}`}
              alt="thumbnail"
            />
            <div className="title">
              <h1>{tv.name}</h1>
            </div>

            <div className="date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#0B4F52"
                re
                class="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <p>{tv.first_air_date}</p>
            </div>
          </Wrapper>
        );
      })
    );
  };

  return (
    <>
      <Filter />
      <div className="content__container">
        <TvOnTheAir />
      </div>
    </>
  );
};

export default Airing;

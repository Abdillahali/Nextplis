import React, { useState } from "react";

import "./Filter.css";

const Filter = () => {
  const [click, setClick] = useState(false);

  const toggleHandler = (i) => {
    if (click === i) {
      return setClick(false);
    }
    setClick(i);
  };
  const Select = () => {
    return (
      <div>
        <select className="select-section" name="#" id="#">
          <option value="Release_date">Dari A-Z</option>
          <option value="Release_date">Tanggal Rilis Terbaru</option>
          <option value="Release_date">Tanggal Rilis Terlama</option>
        </select>
      </div>
    );
  };

  const FilterFeatured = () => {
    return <h6>Fitur Filter</h6>;
  };
  const filterItem = [
    {
      feature: "Sort",
      insideFeatured: <Select />,
    },
    {
      feature: "Filter",
      insideFeatured: <FilterFeatured />,
    },
    {
      feature: "Where to watch",
      insideFeatured: <Select />,
    },
  ];
  return (
    <div className="filter">
      <div className="filter-box">
        {filterItem.map((item, i) => (
          <div className="sorting">
            <div className="item">
              <div className="feature" onClick={() => toggleHandler(i)}>
                <h4>{item.feature} </h4>

                <span className={click === i ? "rotate" : "svg"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </span>
              </div>

              <div
                className={
                  click === i ? "insideFeatured show" : "insideFeatured"
                }
              >
                {item.insideFeatured}
              </div>
            </div>
          </div>
        ))}

        <button>Search</button>
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { filterTypes } from "../store/actions";

const filterMap = {
  [filterTypes.SHOW_ALL]: "All",
  [filterTypes.SHOW_COMPLETED]: "Completed",
  [filterTypes.SHOW_ACTIVE]: "Active"
};

const Filters = ({ currentFilter, setCurrentFilter }) => {
  const filters = [
    "SHOW_ALL",
    "SHOW_COMPLETED",
    "SHOW_ACTIVE"
  ];

  const breadcrumbs = filters.map(filter => {
    return (
      <Breadcrumb.Item
        key={filter}
        active={currentFilter === filter}
        onClick={() => {
          setCurrentFilter(filter);
        }}
      >
        {filterMap[filter]}
      </Breadcrumb.Item>
    );
  });
  return (
    <Breadcrumb className="mt-3 d-flex justify-content-center">
      {breadcrumbs}
    </Breadcrumb>
  );
};

export default Filters;

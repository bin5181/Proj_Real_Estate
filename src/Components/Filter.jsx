import React, { useEffect, useState } from "react";
import data from "../data";

const Filter = ({ setPropData }) => {
  const priceRanges = [
    { min: 0, max: 0 },
    { min: 0, max: 250 },
    { min: 250, max: 500 },
    { min: 500, max: 2000 },
    { min: 2000, max: 3000 },
    { min: 3000, max: 10000 },
  ];
  const typeRanges = ["Select", "House", "Garage", "Office", "Other"];

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [priceInd, setPriceInd] = useState(0);
  const [typeInd, setTypeInd] = useState(0);

  const submit = () => {
    let filteredProps = data;

    if (location != "") {
      filteredProps = filteredProps.filter((prop) => {
        let propLoc = prop.location.toLowerCase();
        let propCity = prop.city.toLowerCase();
        let propCountry = prop.country.toLowerCase();
        let locEntered = location.toLowerCase();
        if (
          propLoc.indexOf(locEntered) === -1 &&
          propCity.indexOf(locEntered) === -1 &&
          propCountry.indexOf(locEntered) === -1
        )
          return false;
        else return true;
      });
    }
    if (date != "") {
      filteredProps = filteredProps.filter((prop) => prop.movin == date);
    }
    if (priceInd > 0) {
      filteredProps = filteredProps.filter((prop) => {
        let { min: minPrice, max: maxPrice } = priceRanges[priceInd];
        return prop.price >= minPrice && prop.price <= maxPrice;
      });
    }
    if (typeInd > 0) {
      filteredProps = filteredProps.filter(
        (prop) => prop.type == typeRanges[typeInd]
      );
    }

    setPropData([...filteredProps]);
  };

  useEffect(() => {
    submit();
  }, [location, date, typeInd, priceInd]);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <span className="fw-bold fs-5">Search Properties to rent</span>
      </div>
      <div className="my-3 d-flex flex-wrap justify-content-between align-items-center">
        <div className="m-2">
          <div className="text-muted fw-bold">Location</div>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className="m-2">
          <div className="text-muted fw-bold">When</div>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="m-2">
          <div className="text-muted fw-bold">Price</div>
          <div className=" dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {priceInd == 0
                ? "Select"
                : `$${priceRanges[priceInd].min} - $${priceRanges[priceInd].max}`}
            </a>
            <ul className="dropdown-menu">
              {priceRanges.map((el, i) => (
                <li key={i}>
                  <a
                    className={`dropdown-item${priceInd == i ? " active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPriceInd(i);
                    }}
                  >
                    {i == 0 ? "Select" : `$${el.min} - $${el.max}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="m-2">
          <div className="text-muted fw-bold">Type</div>
          <div className=" dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {typeRanges[typeInd]}
            </a>
            <ul className="dropdown-menu">
              {typeRanges.map((el, i) => (
                <li key={i}>
                  <a
                    className={`dropdown-item${typeInd == i ? " active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setTypeInd(i);
                    }}
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className="m-2 btn btn-outline-success"
          onClick={() => {
            setLocation("");
            setDate("");
            setTypeInd(0);
            setPriceInd(0);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;

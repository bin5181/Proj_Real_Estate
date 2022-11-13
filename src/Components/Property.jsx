import React from "react";

const Property = ({ property }) => {
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img src={property.img} className="card-img-top" alt="property" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{property.name}</h5>
        <p className="card-text">
          {property.location}, {property.city}, {property.country}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <div>Price:</div>
          <div>${property.price}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <div>Moving date:</div>
          <div>{property.movin}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <div>Type:</div>
          <div>{property.type}</div>
        </li>
      </ul>
      <div className="card-body d-flex justify-content-between">
        <div>{property.detail1}</div>
        <div>{property.detail2}</div>
        <div>{property.detail3}</div>
      </div>
    </div>
  );
};

export default Property;

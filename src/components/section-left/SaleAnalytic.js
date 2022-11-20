import React from "react";
import "./SaleAnalytic.css";
const SaleAnalytic = (props) => {
  return (
    <>
      <div className="sales-analytics">
        <h2>آنالیز فروش</h2>
        <div className="item online">
          <div className="icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="left">
            <div className="info">
              <h3>Online Orders</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
        <div className="item offline">
          <div className="icon">
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="left">
            <div className="info">
              <h3>Offline Orders</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="danger">-17%</h5>
            <h3>1100</h3>
          </div>
        </div>
        <div className="item customers">
          <div className="icon">
            <i className="fa-solid fa-person"></i>
          </div>
          <div className="left">
            <div className="info">
              <h3>New Customers</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+25%</h5>
            <h3>849</h3>
          </div>
        </div>
        <div className="item add-product">
          <div>
            <i className="fa-solid fa-plus"></i>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleAnalytic;

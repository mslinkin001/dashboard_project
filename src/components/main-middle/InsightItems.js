import React from "react";
import "./InsightItems.css";
const InsightItems = () => {
  return (
    <>
      <div className="insights">
        <div className="sales">
          <i className="fa-solid fa-chart-simple"></i>
          <div className="middle">
            <div className="left">
              <h3>Total Sales</h3>
              <h1>25.88$</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--End of Sales--> */}
        <div className="expenses">
          <i className="fa-solid fa-chart-pie"></i>
          <div className="middle">
            <div className="left">
              <h3>Total Expenses</h3>
              <h1>14.16$</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--End of Expenses--> */}
        <div className="income">
          <i className="fa-solid fa-chart-area"></i>
          <div className="middle">
            <div className="left">
              <h3>Total Income</h3>
              <h1>10.864$</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* //End of Income */}
      </div>
    </>
  );
};

export default InsightItems;

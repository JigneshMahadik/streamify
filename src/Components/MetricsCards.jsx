import React from "react";
import "../CSS/MetricsCards.css";
import user from "../Icons/user.png";
import revenue from "../Icons/revenue.gif";
import artist from "../Icons/artist.png";
import stream from "../Icons/stream.svg";
import active from "../Icons/active-users.png";
import total from "../Icons/total-users.png";

const MetricsCards = () => {
  return (
    <div className="container">
      <div className="cards-wrapper">
        <div className="card">
          <img src={total} width={40} alt="Total Users" />
          <p className="card-title">Total Users</p>
          <p className="card-value">1,12,000</p>
        </div>
        <div className="card">
          <img src={active} width={40} alt="Active Users" />
          <p className="card-title">Active Users</p>
          <p className="card-value">89,000</p>
        </div>
        <div className="card">
          <img src={stream} width={40} alt="Total Streams" />
          <p className="card-title">Total Streams</p>
          <p className="card-value">2310</p>
        </div>
        <div className="card">
          <img src={revenue} width={40} alt="Revenue" />
          <p className="card-title">Revenue</p>
          <p className="card-value">$12,000</p>
        </div>
        <div className="card">
          <img src={artist} width={40} alt="Top Artist" />
          <p className="card-title">Top Artist</p>
          <p className="card-value">"Arijit Singh"</p>
        </div>
      </div>
    </div>
  );
};

export default MetricsCards;

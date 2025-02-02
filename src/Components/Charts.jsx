import React, { useState } from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import BarChart from './BarChart';
import "../CSS/Charts.css";

const Charts = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="charts-container">
      {/* Toggle Buttons */}
      <div className="btn-toggle">
        <button 
          onClick={() => setActiveTab(1)}
          className={`tab-btn ${activeTab === 1 ? 'active' : ''}`}
        >
          Tab 1
        </button>
        <button 
          onClick={() => setActiveTab(2)}
          className={`tab-btn ${activeTab === 2 ? 'active' : ''}`}
        >
          Tab 2
        </button>
        <button 
          onClick={() => setActiveTab(3)}
          className={`tab-btn ${activeTab === 3 ? 'active' : ''}`}
        >
          Tab 3
        </button>
      </div>

      {/* Content Sections */}
      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <h4 className="tab-heading">User Growth Chart</h4>
            <LineChart />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h4 className="tab-heading">Revenue Distribution</h4>
            <PieChart />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h4 className="tab-heading">Top 5 Streamed Songs</h4>
            <BarChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Charts;

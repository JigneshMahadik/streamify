import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import MetricsCards from '../Components/MetricsCards';
import Charts from '../Components/Charts';
import DataTable from '../Components/DataTable';

const Dashboard = () => {
  return (
    <div className="bg-layout-color text-white min-vh-100">
      <Navbar/>
      <h2 style={{textAlign: 'left', marginLeft:'20px', marginTop : '2%'}}>Dashboard Overview</h2>
      <MetricsCards/>
      <Charts/>
      <DataTable/>
    </div>
  );
};

export default Dashboard;

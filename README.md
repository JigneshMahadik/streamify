## Hosted URL : https://streamify-sable.vercel.app/

## Overview

The Music Streaming Analytics Dashboard is a single-page application (SPA) built for a fictional music streaming service called "Streamify." The dashboard displays key metrics and data visualizations that provide insights into user activity, revenue, and content performance, helping the management team make informed decisions.

---

## Features

### Key Metrics
The dashboard includes cards displaying the following key metrics:
- **Total Users**: Total number of registered users.
- **Active Users**: Number of users who have streamed at least one song in the last 30 days.
- **Total Streams**: Total number of song streams on the platform.
- **Revenue**: Total revenue generated from subscriptions and advertisements.
- **Top Artist**: The artist with the most streams in the last 30 days.

### Data Visualizations
The following data visualizations are included:
- **User Growth Chart**: A line chart showing growth in total users and active users over the past 12 months.
- **Revenue Distribution**: A pie chart displaying revenue distribution from different sources (e.g., Subscriptions, Ads).
- **Top 5 Streamed Songs**: A bar chart showcasing the top 5 most-streamed songs in the past 30 days.

### Data Table
The dashboard includes a data table that lists recent streams with the following columns:
- Song Name
- Artist
- Date Streamed
- Stream Count
- User ID

### User Interaction
- **Sorting & Filtering**: Allows users to sort by date or stream count, and filter by artist or song name.
- **Chart Interactions**: Users can hover over points on the line chart to view exact numbers, and click on segments of the pie chart to filter the data table by the corresponding revenue source.

### Design & UX
- **Responsive Design**: The dashboard adapts to various screen sizes, ensuring usability across devices.
- **Modern Design Language**: Clean and minimal design with an emphasis on clarity and usability.
- **CSS Framework**: Built using **Bootstrap** for a flexible and responsive layout.

---

## Technical Details

### Technologies Used
- **React**: For building the user interface and state management.
- **State Management**: React's Context API or Redux for managing the application state.
- **Data Visualization**: Libraries such as **Chart.js** or **Recharts** to create the charts.
- **CSS Framework**: **Bootstrap** for styling the dashboard.

---

## Setup and Installation

### Clone the Repository
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/JigneshMahadik/streamify.git

2. Navigate into the project directory and install the required dependencies:
  cd streamify
  npm install

3. Start the development server:
  npm start

The application will be available at http://localhost:3000.

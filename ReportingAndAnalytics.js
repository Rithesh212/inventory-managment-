import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import '../styles/ReportingAndAnalytics.css';

// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function ReportingAndAnalytics() {
    // Example data for charts
    const inventoryData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
        datasets: [{
            label: 'Stock Levels',
            data: [100, 200, 150, 80, 120],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [300, 250, 400, 350, 500],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    const stockPieData = {
        labels: ['In Stock', 'Out of Stock', 'Low Stock'],
        datasets: [{
            label: 'Stock Status',
            data: [60, 10, 30],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    };

    return (
        <div className="reporting-analytics">
            <h3>Reporting and Analytics</h3>
            <p>Generate and view inventory performance reports.</p>
            <div className="charts-container">
                <div className="chart">
                    <h4>Stock Levels</h4>
                    <Bar data={inventoryData} />
                </div>
                <div className="chart">
                    <h4>Sales Over Time</h4>
                    <Line data={salesData} />
                </div>
                <div className="chart">
                    <h4>Stock Status</h4>
                    <Pie data={stockPieData} />
                </div>
            </div>
        </div>
    );
}

export default ReportingAndAnalytics;

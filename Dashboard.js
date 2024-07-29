import React from 'react';
import '../styles/Dashboard.css';
import InventoryTracking from './InventoryTracking';
import ProductInfoManagement from './ProductInfoManagement';
import OrderManagement from './OrderManagement';
import StockMovement from './StockMovement';
import ReorderManagement from './ReorderManagement';
import ReportingAndAnalytics from './ReportingAndAnalytics';
import UserAccessControl from './UserAccessControl';

function Dashboard() {
    return (
        <body>
        <div className="dashboard-container">
            <h2>Inventory Management Dashboard</h2>
            <div className="dashboard-sections">
                <InventoryTracking />
                <ProductInfoManagement />
                <OrderManagement />
                <StockMovement />
                <ReorderManagement />
                <ReportingAndAnalytics />
                <UserAccessControl />
            </div>
        </div>
        </body>
    );
}

export default Dashboard;

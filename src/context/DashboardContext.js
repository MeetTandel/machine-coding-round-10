import { createContext, useContext, useState } from "react";
import { inventoryData } from "../Data";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [dashboardData, setDashboardData] = useState(
    localStorage.getItem("dashboard_data") === null
      ? inventoryData
      : JSON.parse(localStorage.getItem("dashboard_data"))
  );
  const [category, setCategory] = useState("All");
  const [lowStockFlag, setLowStockFlag] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const { totalStock, totalDelivered, lowStockItems } = dashboardData.reduce(
    (acc, curr) => ({
      totalStock: acc.totalStock + curr.stock,
      totalDelivered: acc.totalDelivered + curr.delivered,
      lowStockItems:
        curr.stock <= 10 ? acc.lowStockItems + 1 : acc.lowStockItems,
    }),
    { totalStock: 0, totalDelivered: 0, lowStockItems: 0 }
  );

  const filteredCategoryData =
    category === "All"
      ? dashboardData
      : dashboardData.filter(
          (item) => item.department.toLowerCase() === category
        );

  const lowStockData = lowStockFlag
    ? filteredCategoryData.filter((item) => item.stock <= 10)
    : filteredCategoryData;

  const productData = lowStockData.sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );

  return (
    <DashboardContext.Provider
      value={{
        totalStock,
        totalDelivered,
        lowStockItems,
        category,
        setCategory,
        lowStockFlag,
        setLowStockFlag,
        sortBy,
        setSortBy,
        productData,
        setDashboardData,
        dashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
export const useDashboard = () => useContext(DashboardContext);

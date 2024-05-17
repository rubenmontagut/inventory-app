import { useState, useEffect } from "react";
import { ManufacturerOrderDetails } from "../types/OrderDetails";
import manufacturerOrderDetails from "../../data/manufacturerOrderDetails.json";

export default function useManufacturerOrder(manufacturer_order_id: string) {
  const [orderDetails, setOrderDetails] = useState<ManufacturerOrderDetails[]>(
    []
  );

  useEffect(() => {
    if (!manufacturer_order_id) return;

    try {
      const id = parseInt(manufacturer_order_id);
      const details = manufacturerOrderDetails.filter(
        (detail: ManufacturerOrderDetails) =>
          detail.manufacturer_order_id === id
      );
      setOrderDetails(details);
    } catch (error) {
      console.error("Error fetching order details", error);
    }
  }, [manufacturer_order_id]);

  return { orderDetails };
}

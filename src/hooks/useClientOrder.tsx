import { useState, useEffect } from "react";
import { type ClientOrderDetails } from "../types/OrderDetails";
import clientOrderDetails from "../../data/clientOrderDetails.json";

export default function useManufacturerOrder(client_order_id: string) {
  const [orderDetails, setOrderDetails] = useState<ClientOrderDetails[]>([]);

  useEffect(() => {
    if (!client_order_id) return;

    try {
      const id = parseInt(client_order_id);
      const details = clientOrderDetails.filter(
        (detail: ClientOrderDetails) => detail.client_order_id === id
      );
      setOrderDetails(details);
    } catch (error) {
      console.error("Error fetching order details", error);
    }
  }, [client_order_id]);

  return { orderDetails };
}

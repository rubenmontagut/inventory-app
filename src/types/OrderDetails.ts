export interface ClientOrderDetails {
  id: number;
  client_order_id: number;
  product_model: string;
  quantity: number;
  total: number;
}

export interface ManufacturerOrderDetails {
  id: number;
  manufacturer_order_id: number;
  product_model: string;
  quantity: number;
  total: number;
}

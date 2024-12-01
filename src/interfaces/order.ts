
interface OrderItem {
  id: number;
  name: string;
  price?: number;
  quantity: number;
}

interface OrderRound {
  created: string;
  items: OrderItem[];
}

export interface Order {
  id: number;
  created: string;
  paid: boolean;
  taxes: number;
  discount: number;
  user_id: number;
  user_name: string;
  items: OrderItem[];
  rounds:OrderRound[];
  total: number;
  subtotal: number;
}
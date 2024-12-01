export interface Stock {
  id:number;
  lastUpdate:string;
  items:StockItem[];
}

export interface StockItem{
  id:number;
  name:string;
  price:number;
  originalPrice:number;
  quantity:number;
}
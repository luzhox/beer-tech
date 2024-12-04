/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from "@/components/Table";
import { headersOrder } from "@/data";
import useFormatDates from "@/hooks/useFormatDates";
import { Order } from "@/interfaces/order";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ordenes de bebidas - Beer System',
  description: 'Ordenes de bebidas en Beer System',
};

const getOrders = async () => {
  return await fetch('https://beer-backend-1.onrender.com/api/v1/orders')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export default async function Home() {
  const data = await getOrders();
  return (
    <>
      <div className="orders">
        <div className="dashboard-title">
          <h1>Ordenes</h1>
        </div>
        <div className="dashboard-table beer-order">
          <Table headers={headersOrder}>
            {data.map((order: Order) => {
              const obtainNumberDrinks = order.items.reduce((acc, item) => {
                return acc + item.quantity;
              }
                , 0);
              const {obtainDayWithMonthAndYear,obtainHour} = useFormatDates(order.created);

              return (
                <div key={order.id + order.user_id} className="beer-order__item">
                  <div className="beer-order__item__data user">{order.user_name}</div>
                  <div className="beer-order__item__data round"><p>{order.rounds.length} rondas</p><button>Ver detalle</button></div>
                  <div className="beer-order__item__data created"><p>{obtainDayWithMonthAndYear}</p><p>{obtainHour}</p></div>
                  <div className={`beer-order__item__data status ${order.paid ? 'green' : 'default'}`}><p>{order.paid ? 'Pagado' : 'Pendiente'}</p></div>
                  <div className="beer-order__item__data count"><p>{obtainNumberDrinks}</p><button>Ver detalle</button></div>
                  <div className="beer-order__item__data amount">${order.total.toFixed(2)}</div>
                </div>)
            })}
          </Table>
        </div>
      </div>
    </>
  );
}

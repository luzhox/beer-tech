/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from "@/components/Table";
import { headersOrder } from "@/data";
import useFetchGet from "@/hooks/useFetch";
import useFormatDates from "@/hooks/useFormatDates";
import { Order } from "@/interfaces/order";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ordenes de bebidas - Beer System',
  description: 'Ordenes de bebidas en Beer System',
};

const getOrders = async () => {
  const { fetchApi } = useFetchGet('https://beer-backend-1.onrender.com/api/v1/orders');
  return await fetchApi();
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

              const { obtainDayWithMonthAndYear, obtainHour } = useFormatDates(order.created);

              return (
                <Link key={order.id + order.user_id + order.user_name} href={`/order/${order.user_id}`} style={{ color: 'black' }}>
                  <div className="beer-order__item">
                    <div className="beer-order__item__data user">{order.user_name}</div>
                    <div className="beer-order__item__data round"><p>{order.rounds.length} rondas</p></div>
                    <div className="beer-order__item__data created"><p>{obtainDayWithMonthAndYear}</p><p>{obtainHour}</p></div>
                    <div className={`beer-order__item__data status ${order.paid ? 'green' : 'default'}`}><p>{order.paid ? 'Pagado' : 'Pendiente'}</p></div>
                    <div className="beer-order__item__data count"><p>{obtainNumberDrinks}</p></div>
                    <div className="beer-order__item__data amount">${order.total.toFixed(2)}
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.333H20M20 12.333L14.375 6.33301M20 12.333L14.375 18.333" stroke="#5FBC35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>)
            })}
          </Table>
        </div>
      </div>

    </>
  );
}

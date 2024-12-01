

import Modal from "@/components/Modal";
import { Table } from "@/components/Table";
import { headersOrder } from "@/data";
import { Order } from "@/interfaces/order";
import  { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: 'Ordenes de bebidas - Beer System',
  description: 'Ordenes de bebidas en Beer System',
};

const getOrders = async () => {
  return  await fetch('https://beer-backend-1.onrender.com/api/v1/orders')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}


export default async function Home() {

  let OpenModal = false;
  const data = await getOrders();
  return (
    <>
  
    <div className="orders">
      <div className="dashboard-title">
        <h1>Ordenes</h1>
      </div>
      <div className="dashboard-table beer-order">
      <Table headers={headersOrder}>
      {data.map((order:Order) =>{
        const obtainNumberDrinks = order.items.reduce((acc, item) => {
          return acc + item.quantity;
        }
        ,0);
        const formatDateWithHours = new Date(order.created);
 
        const obtainDayWithMonthAndYear = formatDateWithHours.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        const obtainHour = formatDateWithHours.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        

        return (
        <div key={order.id+order.user_id} className="beer-order__item">
          <div className="beer-order__item__data user">{order.user_name}</div>
          <div className="beer-order__item__data round"><p>{order.rounds.length} rondas</p><button>Ver detalle</button></div>
          <div className="beer-order__item__data created"><p>{obtainDayWithMonthAndYear}</p><p>{obtainHour}</p></div>
          <div className={`beer-order__item__data status ${order.paid?'green':'default'}`}><p>{order.paid?'Pagado':'Pendiente'}</p></div>
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

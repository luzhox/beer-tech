

import { formatDate } from "@/utils/format";
import  { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ordenes de bebidas - Beer System',
  description: 'Ordenes de bebidas en Beer System',
};

const getOrders = async (id:number) => {
  return  await fetch(`https://beer-backend-1.onrender.com/api/v1/orders/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}


export default async function OrderDetail({params}:any) {
  const {order} = params;
  console.log('praam',params);
  const data = await getOrders(order);
  const obtainNumberDrinks = data.items.reduce((acc:any, item:any) => {
    return acc + item.quantity;
    
  }
  ,0);

  const formatDateWithHours = new Date(data.created);
 
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
    <>
  
    <div className="order">
      <div className="dashboard-title">
        <div className="group">
        <Link href="/" className="backButton">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.7333" cy="17.7333" r="17.2333" stroke="#2C4267"/>
            <path d="M13.825 19L19.425 24.6L18 26L10 18L18 10L19.425 11.4L13.825 17H26V19H13.825Z" fill="#173A6B"/>
          </svg>
        </Link>
        <div className="text">
        <p>N°{order}</p>
        <h1>Orden de {data.user_name}</h1>
        </div>
        </div>
      </div>
      <div className="dashboard-content">
      <div className="dashboard-cards ">
        <h3>Rondas</h3>
        {data.rounds.map((round:any,index:number) => {
          return (
            <div key={index} className="order-round__item">
              <h4><strong>Fecha y hora de pedido:</strong> {formatDate(round.created,true)}</h4>
              <div className="order-round__item__products">
                <h4><strong>Productos:</strong></h4>
                <ul>
                {round.items.map((item:any,index:number) => {
                  return (
                    <li key={index} className="order-round__item__product">
                      <p>{item.name}({item.quantity})</p>
                    </li>
                  )
                }
                )}
                </ul>
              </div>
            </div>
          )
        }
        )}
      </div>
      <div className="dashboard-cards ">
      <h3>Detalle de facturación</h3>

        <div className="order-data">
          <h4>Subtotal </h4>
          <p>${data.subtotal}</p>
        </div>
        <div className="order-data">
          <h4>Taxes </h4>
          <p>${data.taxes}</p>
        </div>
        <div className="order-data">
          <h4>Descuentos </h4>
          <p>${data.discounts}</p>
        </div>
        <div className="order-data">
          <h4><strong>Total a pagar</strong> </h4>
          <p>${data.total}</p>
        </div>
      </div>
      </div>
      </div>

      </>
  );
}

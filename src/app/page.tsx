import { Order } from "@/interfaces/order";

// const getOrders = async () => {
//   return  await fetch('http://127.0.0.1:8000/api/v1/orders')
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// }

export default async function Home() {
  // const data = await getOrders();
  // console.log('data',data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hola</h1>
      {/* {data.map((order:Order) => (
        <div key={order.id} className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">{order.user_name}</h1>
          <p className="text-lg">{order.user_id}</p>
          <p className="text-lg">{order.created}</p>
          <p className="text-lg">{order.paid}</p>
          <p className="text-lg">{order.taxes}</p>
          <p className="text-lg">{order.discount}</p>
          <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
            {order.rounds.map((round) => (
              <div key={round.created} className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
                <p className="text-lg">{round.created}</p>
                {round.items.map((item) => (
                  <div key={item.id} className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
                    <p className="text-lg">{item.name}</p>
                    <p className="text-lg">{item.price}</p>
                    <p className="text-lg">{item.quantity}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>


        </div>
      ))} */}
    </main>
  );
}

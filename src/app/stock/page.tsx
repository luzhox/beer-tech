import { Table } from "@/components/Table";
import { headersStock } from "@/data";
import useFetchGet from "@/hooks/useFetch";
import { StockItem } from "@/interfaces/stock";
import { formatDate } from "@/utils/format";

const getStock = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {fetchApi} = useFetchGet('https://beer-backend-1.onrender.com/api/v1/stock');
  return await fetchApi();
}

export default async function Home() {
  const data = await getStock();


  return (
    <div className="stock">
      <div className="dashboard-title">
        <h1>Stock</h1>
        <p>Actualizado al {formatDate(data.last_updated)}</p>
      </div>
      <div className="dashboard-table">
        <Table headers={headersStock}>
          {data.beers.map((stock: StockItem) => {
            return (
              <div key={stock.id + stock.name} className="stock__item">
                <div className="stock__item__data user">{stock.name}</div>
                <div className="stock__item__data round"><p>${stock.originalPrice}</p></div>
                <div className="stock__item__data created">${stock.price}</div>
                <div className="stock__item__data status">{stock.quantity}</div>
              </div>)
          })}
        </Table>
      </div>
    </div>
  );
}

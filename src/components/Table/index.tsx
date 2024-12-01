
interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

export const Table = ({headers,children}:TableProps) => {
  return (
    <div className="table-ui">
      <div className="table-ui__header">
        {headers.map((header,index) => {
          return (<div key={index}className="table-ui__header__item">
            <p>{header}</p>
          </div>)
        })}
      </div>
      <div className="table-ui__body">
        {children}
      </div>
    </div>
  );
}
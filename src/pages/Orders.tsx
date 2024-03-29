import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      id: "asdfsdf",
      amount: 4000,
      quantity: 4,
      discount: 300,
      status: <span className="green"> Processing</span>,
      action: <Link to={`/order/asdfsdf`}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboardProductBox",
    "Orders",
    rows.length > 6
  );
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table()}
    </div>
  );
};

export default Orders;

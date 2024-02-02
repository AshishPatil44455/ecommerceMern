import AdminSidebar from "../../../components/admin/AdminSidebar";
import { BarChart } from "../../../components/admin/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[20, 40, 60, 80, 100, 120, 140]}
            data_2={[80, 60, 40, 20, 50, 20, 40, 60]}
            title_1="Products"
            title_2="Users"
            bgColor_1={"hsl(260,50%,30%)"}
            bgColor_2={"hsl(360,90%,90%)"}
          />
          <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[20, 110, 60, 80, 190, 120, 59, 160, 180, 85, 77, 240]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={"hsl(260,50%,30%)"}
            bgColor_2=""
            labels={months}
          />
          <h2>ORDERS THROUGHOUT THE YEAR</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;

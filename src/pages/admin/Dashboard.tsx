import { BiMaleFemale } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../../assets/data/data.json";

import AdminSidebar from "../../components/admin/AdminSidebar";
import { BarChart, DoughnutChart } from "../../components/admin/Charts";
import Table from "../../components/admin/DashboardTable";

const userImg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";



const dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        {/*first section*/}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="profile" />
        </div>
        {/*second section*/}
        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={450000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-18}
            value={450}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={85}
            value={34000}
            heading="Transactions"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={34}
            value={1100}
            heading="Products"
            color="rgb(76, 0,255)"
          />
        </section>
        {/*third section*/}
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transactions</h2>
            {/*Graph here*/}
            <BarChart
              data_2={[300, 144, 433, 655, 237, 245, 190]}
              data_1={[200, 644, 333, 555, 737, 445, 990]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgb(53,162,232)"
            />
          </div>

          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            {/*Chart here Doughnut*/}
            <DoughnutChart
              labels={["Male", "Female"]}
              data={[60, 40]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={"80"}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/*Table here*/}
          <Table data={data.transaction}/>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    {/*widget info*/}
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent}%{" "}
        </span>
      )}
    </div>

    {/*widget chart*/}
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          (Math.abs(percent) / 100) * 360
        }deg,rgb(225,225,225) 0)`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default dashboard;

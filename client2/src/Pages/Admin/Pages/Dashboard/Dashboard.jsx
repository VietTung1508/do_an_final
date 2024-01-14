import "./Dashboard.scss";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";

function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="widgets">
        <Widget type="user" />
        <Widget type="product" />
        <Widget type="order" />
        <Widget type="profit" />
      </div>
      <div className="charts">
        <Featured />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;

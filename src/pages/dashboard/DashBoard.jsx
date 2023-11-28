import DashboardTile from "../../components/Dashboard/DashbaordTile_Component";
import PageLayout from "../../layouts/PageLayout";
import dashboard from "../../presentation/dashbaord_model";

function DashBoard() {
  return (
    <PageLayout header={"hello"}>
      <div className="flex flex-wrap w-full justify-between">
        {dashboard.map((item, id) => (
          <DashboardTile key={id} title={item.title} />
        ))}
      </div>
      <div></div>
    </PageLayout>
  );
}

export default DashBoard;

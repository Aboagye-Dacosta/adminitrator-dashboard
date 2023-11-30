import DashboardTile from "../../components/Dashboard/DashboardTile";
import PageLayout from "../../components/layout/PageCard";
import dashboard from "../../presentation/dashboard/dashboard_model";

// eslint-disable-next-line react/prop-types
function DashBoard({ title }) {
  return (
    <PageLayout header={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full md:justify-between items-center justify-center">
        {dashboard.map((item, id) => (
          <DashboardTile
            key={id}
            title={item.title}
            Icon={item.icon}
            colors={item.colors}
          />
        ))}
      </div>
      <div></div>
    </PageLayout>
  );
}

export default DashBoard;

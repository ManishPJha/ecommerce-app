// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Icons Imports
import Poll from "mdi-material-ui/Poll";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import HelpCircleOutline from "mdi-material-ui/HelpCircleOutline";
import BriefcaseVariantOutline from "mdi-material-ui/BriefcaseVariantOutline";

// ** Custom Components Imports
import CardStatisticsVerticalComponent from "src/@core/components/card-statistics/card-stats-vertical";
import DashboardCard from "src/components/admin/DashboardCard";

const Dashboard = () => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={12} md={12}>
        <DashboardCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

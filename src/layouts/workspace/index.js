/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsPieChart from "examples/Charts/PieChart";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import reportsPieChartData from "layouts/workspace/data/reportsPieChartData";


//Speed Dial
import { useState } from "react";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';

const actions = [
  { icon: <FileCopyIcon />, name: 'Bar'},
  { icon: <FileCopyIcon />, name: 'Counter'},
  { icon: <FileCopyIcon />, name: 'Line'},
  { icon: <FileCopyIcon />, name: 'Pie'},
];


function Workspace() {
  const { sales, tasks } = reportsLineChartData;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  //Component Adder
  const [components, setComponents] = useState([]); 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
        {components.map((item, i) =>{
              if (item == "Counter") {
                return <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="weekend"
                    title={item}
                    count={0}
                  />
                </MDBox>
              </Grid>
              } else if (item == "Bar") {
                return <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsBarChart
                      color="info"
                      title={item}
                      description="Description"
                      date="Update"
                      chart={reportsBarChartData}
                    />
                  </MDBox>
              </Grid>
              }else if (item == "Line") {
                return <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                  <ReportsLineChart
                  color="success"
                  title={item}
                  description="Description"
                  date="Date"
                  chart={tasks}
                />
                  </MDBox>
              </Grid>
              }else if (item == "Pie") {
                return <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                  <ReportsPieChart
                  color="success"
                  title={item}
                  description="Description"
                  date="Date"
                  chart={reportsPieChartData}
                />
                  </MDBox>
              </Grid>
              }
            })}

        </Grid>

      </MDBox>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 20, right: 30 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
          {actions.map(action => (
            <SpeedDialAction
              tooltipOpen
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={event => {
                if(action.name=="Bar"){
                  // do something 
                  console.log("Pie")
                  setComponents([...components, "Bar"]) 
                }else if(action.name=="Counter"){
                  //do something else
                  console.log("Counter")
                  setComponents([...components, "Counter"]) 
                }else if(action.name=="Line"){
                  //do something else
                  setComponents([...components, "Line"]) 
                }else if(action.name=="Pie"){
                  //do something else
                  setComponents([...components, "Pie"]) 
                }
                 }}
            />
          ))}
        </SpeedDial>
      <Footer />
    </DashboardLayout>
  );
}

export default Workspace;

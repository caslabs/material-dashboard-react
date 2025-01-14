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
import StreamChart from "examples/Charts/BarCharts/StreamChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

//Experiment - Image Preview
import React, { useState, useEffect } from 'react'

//Experiment - Image Annotations
import ReactImageAnnotate from "react-image-annotate";

function DataAnnotation() {
  const { sales, tasks } = reportsLineChartData;
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLS] = useState([                {
    src: "https://opb-opb-prod.cdn.arcpublishing.com/resizer/EdaeZGhTkhNaO6QK5O2JNHRoQlg=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/opb/KXHTPJMIR5GPRFEXFGOK3URQA4.jpg",
    name: "Device Snapshot",
    regions: []
  }]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    setImageURLS(newImageURLs)
    //imageURLS is populated

  }, [images])

  function onImageChange(e) {
    setImages([...e.target.files]);
  }


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ReactImageAnnotate
              labelImages
              regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
              regionTagList={["tag1", "tag2", "tag3"]}
              images={imageURLs}/>
      {/*<input type="file" multiple accept="image/*" onChange={onImageChange} /> */}
      {

      /*
        imageURLs.map(imageSrc =>
        <img width="300px" src={imageSrc} />

                <ReactImageAnnotate
        labelImages
        regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
        regionTagList={["tag1", "tag2", "tag3"]}
        images={[
          {
            src: imageSrc,
            name: "Image 1",
            regions: []
          }
        ]}
      />
      */
      }
      <Footer />
    </DashboardLayout>
  );
}

export default DataAnnotation;

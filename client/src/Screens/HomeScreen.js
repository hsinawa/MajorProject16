import React from "react";
import Navbar from "../Components/Navbar";
import "./home.css";

//MUI
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function WhyWorkWithUs() {
  const itemData = [
    {
      img: "https://media3.giphy.com/media/Ph6f7aZVkLY4A1mJvY/giphy.gif?cid=6c09b952bc7c0f43a5d5ab6707b9d4395c10aefde5708a6e&rid=giphy.gif&ct=g",
      title: "High Accuracy",
      author: "High Accuracy",
    },
    {
      img: "https://images.wsj.net/im-568211",
      title: "AI Validated",
      author: "AI Validated",
    },
    {
      img: "https://www.techbabble.zone/content/images/2021/08/37909-robot-ai.gif",
      title: "Real Time Service",
      author: "Real Time Service",
    },
  ];

  return (
    <Box
      sx={{
        width: "80%",
        height: 500,
        overflowY: "scroll",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const CrashImpacts = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <p style={{ marginLeft: "60px", width: "100%" }}>
              <h2 style={{ color: "red" }}>Flexible solution</h2>
              <h1 style={{ color: "#152238" }}>Detect high-impact crashes.</h1>

                <p style={{
                    borderRadius:'12px',
                    backgroundColor:'red',
                    color:'white',
                    padding:'10px 20px 10px 20px',
                    width:'18%'
                }} > Explore More </p>

            </p>
            
          </Grid>
          <Grid item xs={6}>
            <p style={{ margin: "20px", width: "80%", paddingTop:'50px' }}>
              Whether it's only on-device crash detection, or also detailed
              crash reports, we have a flexible solution for different use cases
              – from family safety apps, roadside assistance, to auto insurance,
              and more.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};


const EdgeTech = () =>{

    return(
        <div style={{backgroundColor:'black'}} >

<Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <p style={{ marginLeft: "60px", width: "80%" }}>
              <h2 style={{ color: "red" }}>AI Computing</h2>
              <h1 style={{ color: "white" }}>DashCam for immediacy.</h1>
              <p style={{ color: "white" }}> On-device crash detection ensures the highest level of data privacy. With real-time crash detection, you can: </p>
                <ul style={{ color: "white" }}>
                    <li>Notify emergency contacts like a friend or family member</li>
                    <li>Request emergency services or roadside assistance</li>
                </ul>
             
<br/><br/>
<p style={{
                    borderRadius:'12px',
                    backgroundColor:'red',
                    color:'white',
                    fontSize:'25px',
                    fontWeight:'bold',
                    padding:'10px 20px 10px 20px',
                    width:'30%'
                }} > <a href='/predict' style={{textDecoration:'none', color:'white'}} > Try Demo </a> </p>
            </p>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://cdn.dribbble.com/users/32512/screenshots/4787574/light_ai_design_by_gleb.gif"
              style={{
                width: "90%",
                height: "400px",
              }}
            />
          </Grid>
        </Grid>
      </Box>

        </div>
    )
}


const CrashReport = () =>{


    return (
        <div>
            <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        
        <Grid item xs={6}>
            <img
              src="https://sentiance.com/wp-content/uploads/2022/10/Group-781.svg"
              style={{
                width: "90%",
                height: "400px",
              }}
            />
          </Grid>
        
        
          <Grid item xs={6}>
          <p style={{ marginLeft: "60px", width: "80%" }}>
              <h2 style={{ color: "red" }}>Includes everything in detail</h2>
              <h1 style={{ color: "black" }}>Crash Reporting</h1>
              <p style={{ color: "black" }}> Investigate your crash claims with real-world data from Sentiance's crash reports. The crash forensics reports include:</p>
                <ul style={{ color: "black" }}>
                    <li>Crash time and location</li>
                    <li>Driving events before, during, and after the crash</li>
                    <li>And much more</li>
                </ul>
                <p style={{ color: "white" }}> Is a crash due to bad weather, road type, time of day, traffic congestion, or trip context? We can identify relevant risk factors to accelerate your claim processing. </p>
             
<br/><br/>
<p style={{
                    borderRadius:'12px',
                    backgroundColor:'red',
                    color:'white',
                    fontSize:'25px',
                    fontWeight:'bold',
                    padding:'10px 20px 10px 20px',
                    width:'35%'
                }} > Get In Touch </p>
            </p>
          </Grid>
      
        </Grid>
      </Box>

        </div>
    )
}

const HomeScreen = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />

      <h2 style={{ color: "red" }}>On-device Crash Detection</h2>
      <h2 style={{ color: "#152238" }}>DashCam-based car crash detection</h2>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img
              src="https://media.tenor.com/Efi-gKaJILYAAAAC/fake-car-crash.gif"
              style={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://ibm.github.io/watson-studio-workshop/housing-price-predictor/assets/linear-regression.gif"
              style={{
                width: "90%",
                height: "83%",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <h2 style={{ color: "#152238", textAlign: "center" }}>Why Choose us?</h2>
      <WhyWorkWithUs />
      <br />
      <CrashImpacts />
      <br /><br /><br />
      <EdgeTech />
      <br /><br />
      <CrashReport />
    </div>
  );
};

export default HomeScreen;

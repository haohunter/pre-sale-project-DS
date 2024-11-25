import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import './index.css';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      //main: '#1a90ff',
      main: "#1cac1d",
    },

secondary: {
  //main: '#1a90ff',
  main: "#fff",
},

body1: {  
  main: "#000",
},

newtitle:  {
  //main: '#1a90ff',
  main: "#000",
},

    neutral: {
      main: "#FAFAFA",
    },
  },


 

  typography: {
    fontFamily: ["Segoe UI", "sans-serif"].join(","),


    body1: {
      fontSize: "1.2rem", // or any size you prefer
      fontWeight: "normal", // or "bold" or other font weights
      lineHeight: 1.5, // line height for better readability
      letterSpacing: "normal", // if you want to control spacing between letters
      // add more styles as needed
    },






  },



  
  components: {


  


    MuiButton: {
      styleOverrides: {
        text: {
          fontWeight: 600,
          textTransform: "inherit",
        },


        borders: {
          fontWeight: 700,
          fontSize: "1.2rem",
          textTransform: "inherit",
          backgroundColor: '#F1F1F1',
          borderRadius: 25,
          '&:hover': {
            backgroundColor: '#FAFAFA', // Or any other color
          },
          minWidth: '150px',
          padding: '16px',

              },


        contained: {
          fontWeight: 700,
          fontSize: "1.2rem",
          textTransform: "inherit",
          borderRadius: 25,
          '&:hover': {
            backgroundColor: '#2add47', // Or any other color
          },
          minWidth: '150px',
          padding: '16px',

              },



              smallcontained: {
                fontWeight: 500,
                fontSize: "0.8rem",
                textTransform: "inherit",
                borderRadius: 25,
                Color: '#fff',
                backgroundColor: '#1cac1d',
                '&:hover': {
                  backgroundColor: '#2add47', // Or any other color
                },
                minWidth: '100px',
                padding: '8px',
      
                    },


              containedgr: {
                fontWeight: 700,
                fontSize: "0.8rem",
                textTransform: "inherit",
                borderRadius: 25,
                Color: '#fff',
                backgroundColor: '#1cac1d',
                '&:hover': {
                  backgroundColor: '#2add47', // Or any other color
                },
                minWidth: '150px',
                padding: '10px',
      
                    },

             
      },
    },
  },
});

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const APP_ID = "DYFU90AwvC6Ktjxrr31VdJNhAV5UadWBr97duwex";

const SERVER_URL = "https://gq7x7ofh7pyg.usemoralis.com:2053/server";

const Application = () => {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MoralisDappProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MoralisDappProvider>
      </Web3ReactProvider>
    </MoralisProvider>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root"),
);

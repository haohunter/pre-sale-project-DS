import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Account from "../../account/";
import Networks from "../../Chains/Networks";
// import logo from '../../../assets/images/logo-symbol1.svg';
import logo from "../../../assets/images/logo.png";
import Navbar from "./Navbar";
import Contracts from "../../shared/Contracts";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';


// const mainLinks = [
//   { label: "Home", href: "/" },
//   { label: "Gallery", href: "/gallery" },
// ]

const mainLinks = [{ label: "Home", href: "/" }];



const presaleLink = {
  label: "Pre-sale",
  href: "/pre-sale",
};

// const bridgeLink = {
//   label: "Bridge",
//   href: "https://bridge.poly.network/token/"
// }

//const comingSoonLink = ["Swap", "Mint", "Stake"];
const comingSoonLink = ["Stake"];

const moreMenuLinks = [
  // { label: "Transactions", href: "/transactions" },
  // { label: "NFTs", href: "/nfts" },
  { label: "About us", href: "/about" },
];

const MainNavigation = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [contractsDialogOpen, setContractsDialogOpen] = useState(false);

  const handleContractsDialogToggle = () => {
    setContractsDialogOpen(!contractsDialogOpen);
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


 

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="inherit"
        enableColorOnDark
        elevation={0}
        sx={{ bgcolor: "rgba(255,255,255,0.72)", backdropFilter: "blur(20px)" }}
      >
        <Toolbar sx={{ maxWidth: "1200px", width: "100%", margin: "auto" }}>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginRight: "auto" }}>
            <Link to="/" style={{ marginRight: "auto" }}>
              <img src={logo} alt="ELO logo" width="55" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Navbar
              mainLinks={mainLinks}
              moreMenuLinks={moreMenuLinks}
              comingSoonLink={comingSoonLink}
              // bridgeLink={bridgeLink}
              presaleLink={presaleLink}
              handleClickContracts={handleContractsDialogToggle}
            />
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Networks />
          </Box>
          <Box sx={{ ml: 1 }}>
            <Account />
          </Box>
        </Toolbar>
      </AppBar>


      <Box //this a menu in the bottom of the app
       id="bottom-nav-fixed"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          padding: "1rem",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          zIndex: "9999",
          justifyContent: 'space-around' // To evenly distribute icons
        }}
      >
      <HomeOutlinedIcon  id="home" />
      <SavingsOutlinedIcon  id="Sale" />
      <PriceChangeOutlinedIcon  id="Stake" />
      <HeadsetMicOutlinedIcon  id="Support" />


      </Box>



      <SideDrawer
        mainLinks={mainLinks}
        presaleLink={presaleLink}
        moreMenuLinks={moreMenuLinks}
        comingSoonLink={comingSoonLink}
        onClose={handleDrawerToggle}
        open={mobileDrawerOpen}
        handleClickContracts={handleContractsDialogToggle}
      />
      <Contracts
        open={contractsDialogOpen}
        handleClose={handleContractsDialogToggle}
      />
    </Fragment>
  );
};

export default MainNavigation;

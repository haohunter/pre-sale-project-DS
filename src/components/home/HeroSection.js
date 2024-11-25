import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import Stack from "@mui/material/Stack";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import logoArt from "../../assets/images/logo-blue-art1.png";
import ReactPlayer from "react-player";





const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};



const HeroSection = () => {
  return (
    <Container className="fadeInUp">
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{ maxWidth: "400px", py: 5, mb: 5, mx: "auto" }}>
          <Typography
            color="newtitle"
            variant="h2"
            sx={{ fontWeight: "600", mb: 3 }}
            component="div"
          >
            Effortless <br></br><span class="gradient-on-span-mask">
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Order Foods',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'Get $ELO',
        4000,
        'Get Rewards',
        4000,
          ]}
      wrapper="span"
      class="gradient-on-span-mask"
      speed={20}
      style={{ fontSize: '0.9em', display: 'inline-block' }}
      repeat={Infinity}
    /></span>
          </Typography>
         

   

          <Typography variant="body1" color="text.body1" sx={{ mb: 4 }}>
            ELO is decentralized reward system, the overall system including
            reward will be extended and we will launch extra services to make
            our token more valuable.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Get <span>$ELO</span> token for each order.
          </Typography>
          {/* <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            ...
          </Typography> */}
        
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/pre-sale"
              disableElevation
              variant="contained"
          
               endIcon={<CheckCircleOutlineOutlinedIcon />}

              

            >
              Sign Up
            </Button>
            <Button
              component="a"
              href={""} // elo whitepaper url
              target="_blank"
              rel="noopener noreferrer"
                variant="borders"
              endIcon={<ReceiptLongOutlinedIcon />}
            >
              Whitepaper
            </Button>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {/* <img 
            src={logoArt}
            alt="ELO Logo Alt" 
            width="450"
          /> */}
          <ReactPlayer url="https://www.youtube.com/watch?v=VB5_R9_F8MY" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;

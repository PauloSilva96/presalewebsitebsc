(this.webpackJsonpbscbet = this.webpackJsonpbscbet || []).push([
    import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Modal, Button, useMediaQuery } from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Ethereum } from '@drizzle-icons/fa';
import Web3 from 'web3';
import { Alert } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { WalletModal } from './components/WalletModal';
import { HowToBuy } from './components/HowToBuy';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 700,
    fontSize: '25px',
    color: '#ffffff',
    fontFamily: 'Segoe UI Black',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  iframeContainer: {
    maxWidth: '100%',
    overflowX: 'auto',
  },
  iframe: {
    width: '100%',
    height: '1000px',
    border: 'none',
  },
}));

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0C0C0C',
      light: '#313439',
      contrastText: '#fff',
    },
    secondary: {
      main: '#06044a',
      light: '#4c02f1',
      contrastText: '#000000',
    },
    text: {
      primary: '#fff',
      secondary: '#35343f',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: '#000000',
          color: '#ffffff',
        },
        '.img-fluid': {
          maxWidth: '100%',
          height: 'auto',
        },
      },
    },
  },
});

const web3 = new Web3(Web3.givenProvider ? Web3.givenProvider : 'https://bsc-dataseed.binance.org');

const App = () => {
  const [wrongNetworkModalOpen, setWrongNetworkModalOpen] = useState(false);

  useEffect(() => {
    const checkNetwork = async () => {
      try {
        const chainId = await web3.eth.getChainId();
        if (chainId !== 56) { // Check if network is Binance Smart Chain
          setWrongNetworkModalOpen(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkNetwork();
  }, []);

  const classes = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <ThemeProvider theme={customTheme}>
        <Container>
          <Box mb={2}>
            <Typography variant="h3" className={classes.title}>
              MemeZord Token PreSale
            </Typography>
            <div className={classes.iframeContainer}>
              <iframe src="https://cointool.app/ido/exchange?id=236b24552b20247727225724272021202572232a502a222b2072207050202777232320222a775126722b6f2625" className={classes.iframe} title="cointool-ido"></iframe>
            </div>
          </Box>
          <HowToBuy />
        </Container>
      </ThemeProvider>
      <WrongNetworkModal open={wrongNetworkModalOpen} setOpen={setWrongNetworkModalOpen} />
    </>
  );
};

export default App;

//# sourceMappingURL=main.69531be7.chunk.js.map

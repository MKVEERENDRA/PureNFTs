// _app.js
import '../styles/globals.css';
import Head from 'next/head';
import { NFTMarketPlaceProvider } from '../context/NFTMarketPlace';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitcher from "../thems/thems";


import AppKitProvider from '@/web3config'; // Import the provider

// Internal Imports
import { NavBar, Footer } from "@/components/Comindex";

const MyApp = ({ Component, pageProps }) => (
  <AppKitProvider>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NFTMarketPlaceProvider>
        <NavBar />
        <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

        <Component {...pageProps} />
        <ThemeSwitcher />
        <Footer />
      </NFTMarketPlaceProvider>
    </div>
  </AppKitProvider>
);

export default MyApp;

import Head from "next/head";
import "./index.module.css";
import Layout from "../Components/Layout";
import Heroarea from "../Components/Heroarea";
import Aboutus from "../Components/Aboutus";
import Recentlyviewed from "../Components/Recentlyviewed";
import Discover from "../Components/Discover";
import Shopourselections from "../Components/Shopourselections";
import Whatetsy from "../Components/Whatetsy";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Footerline from "../Components/Footerline";

function index() {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <title>
        Etsy - Shop for handmade, vintage, custom, and unique gifts for everyone
      </title>
      <Layout>
        <Heroarea />
      </Layout>
      <Aboutus />
      <Recentlyviewed />
      <Discover />
      <Shopourselections />
      <Whatetsy />
      <Newsletter />
      <Footer />
      <Footerline />
    </>
  );
}

export default index;

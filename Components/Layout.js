import React from "react";
import Navbar from "./Navbar";
import "./Layout.module.css";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Navbar />
        {props.children}
      </div>
    </>
  );
}

export default Layout;

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Product from "./components/Product";
import Producttwo from "./components/producttwo";
import Style from "./components/Style";
import Reviews from "./components/Reviews";
import Email from "./components/Email";
import Foot from "./components/Foot";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <br />
      <br />
      <Product />
      <br />
      <Style />
      <br />
      <Producttwo />
      <br />
      <Reviews/>
      <br />
      <Email/>
      <br />
      <Foot />
    </div>
  );
}

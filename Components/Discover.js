import "./Discover.module.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Personalizedgifts from "./items/Personalizedgifts";
import Homedecorideas from "./items/Homedecorideas";

function Discover() {
  const [active, setActive] = useState("Personalized gifts");
  return (
    <>
      <h2 className="discover-title">Discover unique hand-picked items</h2>
      <div className="discover__container">
        <ul className="discover-tab-list">
          <li onClick={() => setActive("Personalized gifts")}>
            Personalized gifts
          </li>
          <li onClick={() => setActive("Home decor ideas")}>
            Home decor ideas
          </li>
          <li>Bath & beauty gifts</li>
          <li>Work from home</li>
          <li>Hometown pride</li>
          <li>Tie dye</li>
        </ul>

        <div className="discovercarousel">
          {active === "Personalized gifts" && <Personalizedgifts />}
          {active === "Home decor ideas" && <Homedecorideas />}
        </div>

        {/* <div className="grid-container">
          {Discoverarr.map((x, index) => {
            return (
              <div className={`item${index}`}>
                <div className="product__container">
                  <img src={x.img} className="product__photo" />
                  <span className="product__price">{x.price}</span>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default Discover;

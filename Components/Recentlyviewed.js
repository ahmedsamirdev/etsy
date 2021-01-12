import "./Recentlyviewed.module.css";
import Link from "next/link";

function Recentlyviewed() {
  var Recentlyviewedarr = [
    {
      url: "products/Jewelry-and-Accessories",
      img: "./Moodcards.jpg",
      price: "USD 16.99",
    },
    {
      url: "/products/Minimal-Blogger-Template",
      img: "./Customizable.jpg",
      price: "USD 50.00",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./Redesign.jpg",
      price: "USD 100.00",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./Mobile.jpg",
      price: "USD 11.99",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./Bags.jpg",
      price: "USD 19.99",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./Charcuterie.jpg",
      price: "USD 12.00",
    },
  ];
  return (
    <>
      <div className="recentlyviewed__container">
        <span className="product__title">Recently viewed</span>
        <div className="product__flex">
          {Recentlyviewedarr.map(function (t) {
            return (
              <div className="product__container">
                <Link href={t.url}>
                  <img
                    src={t.img}
                    className="product__photo"
            
                  />
                </Link>
                <span className="product__price">{t.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Recentlyviewed;

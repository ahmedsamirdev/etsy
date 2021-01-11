import Link from "next/link";
import "./EverydayFinds.module.css";

function EverydayFinds() {
  var EverydayFindsarr = [
    {
      title: "Face masks",
      url: "sections/Jewelry-and-Accessories",
      img: "./Facemasks.jpg",
    },
    {
      title: "Wall decor",
      url: "/sections/Clothing-and-Shoes",
      img: "./Walldecor.jpg",
    },
    {
      title: "Gift Ideas",
      url: "/sections/Home-and-Living",
      img: "./GiftIdeas.jpg",
    },
    {
      title: "Outdoor & garden",
      url: "/sections/Wedding-and-Party",
      img: "./Outdoor&garden.jpg",
    },
    {
      title: "Self-care",
      url: "/sections/Toys-and-Entertainment",
      img: "./Self-care.jpg",
    },
    {
      title: "Craft kits",
      url: "/sections/Art-and-Collectibles",
      img: "./Craftkits.jpg",
    },
  ];
  return (
    <>
      <div className="ef__container">
        {EverydayFindsarr.map(function (u) {
          return (
            <div className="ef__block">
              <img src={u.img} className="ef-img ef-img-clip " />
              <div className="ef-title">
                <Link href={u.url}>
                  <span className="ef-title">{u.title}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EverydayFinds;

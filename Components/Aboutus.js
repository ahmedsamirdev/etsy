import "./Aboutus.module.css";

function Aboutus() {
  var Aboutusarr = [
    {
      title: "Unique everything",
      info:
        "We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want)",
    },
    {
      title: "Independent sellers",
      info:
        "Buy directly from someone who put their heart and soul into making something special.",
    },
    {
      title: "Secure shopping",
      info: "We use best-in-class technology to protect your transactions.",
    },
  ];
  return (
    <>
      <div className="aboutus__container">
        {Aboutusarr.map(function (y) {
          return (
            <div className="aboutus_block">
              <div className="aboutus-title">
                {y.title}
              </div>
              <br />
              <span className="aboutus-info">{y.info}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Aboutus;

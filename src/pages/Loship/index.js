import React, { useEffect } from "react";
import { InfoMaps, Section } from "../../components";
import { online } from "../../data";
const Loship = () => {
  useEffect(() => {
    document.title = "Our stores - TROY COFFE & Resturant";
    window.location = "https://www.talabat.com/egypt/restaurant/656822/troyabu-shahin?aid=7045";  //Link
    
  }, []);
  return (
    <>
      <InfoMaps />
      {online.map((store, index) => (
        <Section
          subHeader={store.subHeader}
          header={store.header}
          description={store.description}
          linkBtn={store.linkBtn}
          img={store.img}
          key={index}
        />
      ))}
    </>
  );
};

export default Loship;
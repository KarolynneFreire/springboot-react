import React from "react";
import Carousel from "../Carousel";
import Header from "../Header";
import Main from "../Main";


const Home = () => {
  return (
    <div>
      <div className="container">
        <Carousel></Carousel>
        <Header></Header>
        <Main></Main>
        </div>
    </div>
  );
};

export default Home;
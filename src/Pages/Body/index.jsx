import React from "react";
import Banner from "./Banner/Banner";
import Content from "./Content/Content";

export default function index() {
  return (
    <div className="flex flex-col justify-start items-center">
      <Banner></Banner>
      <Content></Content>
    </div>
  );
}

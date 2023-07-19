import React from "react";
import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";
import data from "../../data.json";

export default function Main() {
    return (
    <main>
    {/* <HornedBeast
        title="Uniwhal"
        imgUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
        description="A unicorn"
        />
        <HornedBeast
        title="Rhino Family"
        imgUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
        description="Rhino with two babies"
      /> */}
        <HornedBeast title={data[0].title} imgUrl={data[0].image_url} description={data[0].description} />
        <HornedBeast title={data[1].title} imgUrl={data[1].image_url} description={data[1].description} />
        <HornedBeast title={data[2].title} imgUrl={data[2].image_url} description={data[2].description} />
        <HornedBeast title={data[3].title} imgUrl={data[3].image_url} description={data[3].description} />
        <HornedBeast title={data[4].title} imgUrl={data[4].image_url} description={data[4].description} />
        <HornedBeast title={data[5].title} imgUrl={data[5].image_url} description={data[5].description} />
        <HornedBeast title={data[6].title} imgUrl={data[6].image_url} description={data[6].description} />
        <HornedBeast title={data[7].title} imgUrl={data[7].image_url} description={data[7].description} />
        <HornedBeast title={data[8].title} imgUrl={data[8].image_url} description={data[8].description} />
        <HornedBeast title={data[9].title} imgUrl={data[9].image_url} description={data[9].description} />
        <HornedBeast title={data[10].title} imgUrl={data[10].image_url} description={data[10].description} />
        <HornedBeast title={data[11].title} imgUrl={data[11].image_url} description={data[11].description} />
        <HornedBeast title={data[12].title} imgUrl={data[12].image_url} description={data[12].description} />
        <HornedBeast title={data[13].title} imgUrl={data[13].image_url} description={data[13].description} />
        <HornedBeast title={data[14].title} imgUrl={data[14].image_url} description={data[14].description} />
        <HornedBeast title={data[15].title} imgUrl={data[15].image_url} description={data[15].description} />
        <HornedBeast title={data[16].title} imgUrl={data[16].image_url} description={data[16].description} />
        <HornedBeast title={data[17].title} imgUrl={data[17].image_url} description={data[17].description} />
        <HornedBeast title={data[18].title} imgUrl={data[18].image_url} description={data[18].description} />
        <HornedBeast title={data[19].title} imgUrl={data[19].image_url} description={data[19].description} />
    </main>
    );
}
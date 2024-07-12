"use client";
import Header from "@/components/header";
import styles from "@/styles/general.module.scss";
// import styles from "@/styles/transition.module.scss";
import { useState } from "react";
import Blog from "./components/blog";
import Terminal from "./components/terminal";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [data, setData] = useState("me");

  const handleRouteChange = (newData: string) => {
    if (data === "me" && newData !== data) {
      setCurrentSlide(1); // Přesun na další slide
    }
    if (data === "blog" && newData !== data) {
      setCurrentSlide(0); // Přesun na předchozí slide
    }
    setData(newData);
  };

  return (
    <div className={styles.container}>
      <Header onRouteChange={handleRouteChange} />
      <hr className={styles.hr} />
      <Carousel
        onChange={(index) => setCurrentSlide(index)}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        selectedItem={currentSlide}
        swipeable={false}
      >
        <Terminal isSelected={data === "me"} />
        <Blog />
      </Carousel>
    </div>
  );
}

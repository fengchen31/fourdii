/* eslint-disable react/prop-types */
import StackGrid, { transitions, easings } from "../../../src";
import React, { useEffect, useRef } from "react";
import { preloadImages } from "../utils";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const transition = transitions.scaleDown;

const Home = () => {
  const gridItemsRef = useRef([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const images = [
    { src: "./images/photos/1.jpeg", label: "" },
    { src: "./images/photos/2.jpeg", label: "" },
    { src: "./images/photos/3.jpeg", label: "" },
    { src: "./images/photos/4.jpeg", label: "" },
    { src: "./images/photos/5.jpeg", label: "" },
    { src: "./images/photos/6.jpeg", label: "" },
    { src: "./images/photos/7.jpeg", label: "" },
    { src: "./images/photos/8.jpeg", label: "" },
    { src: "./images/photos/9.jpeg", label: "" },
    { src: "./images/photos/10.jpeg", label: "" },
    { src: "./images/photos/11.jpeg", label: "" },
    { src: "./images/photos/12.jpeg", label: "" },
    { src: "./images/photos/13.jpeg", label: "" },
    { src: "./images/photos/14.jpeg", label: "" },
    { src: "./images/photos/15.jpeg", label: "" },
    { src: "./images/photos/16.jpeg", label: "" },
    { src: "./images/photos/17.jpeg", label: "" },
    { src: "./images/photos/18.jpeg", label: "" },
    { src: "./images/photos/19.jpeg", label: "" },
    { src: "./images/photos/20.jpeg", label: "" },
  ];

  // 產生隨機尺寸
  const getRandomSize = () => {
    const minSize = 100;
    const maxSize = 300;
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    return size;
  };

  // 取得隨機索引
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  // 在 StackGrid 中安插空白圖片
  const getRandomBlankImages = (count) => {
    for (let i = 0; i < count; i++) {
      const blankImageSize = getRandomSize();
      const randomIndex = getRandomIndex(images.length - 1);
      images.splice(randomIndex, 0, {
        src: "",
        label: "",
        size: blankImageSize,
      });
    }
  };

  getRandomBlankImages(20);

  useEffect(() => {
    const initScroll = async () => {
      console.log("initScroll");

      const lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
      });

      const scrollFn = () => {
        lenis.raf();
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const initAnimations = async () => {
      console.log("initAnimations");

      gridItemsRef.current.forEach((item) => {
        const image = item.querySelector(".grid_item-img");

        console.log(image);

        if (image == null) {
          return;
        }

        gsap.set(image, {
          transformOrigin: "50% 100%",
        });

        gsap.to(image, {
          ease: "none",
          scaleX: 0.5,
          scaleY: 3,
          scrollTrigger: {
            trigger: item,
            start: "top 20%",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(item, {
          ease: "none",
          opacity: 0,
          scrollTrigger: {
            trigger: item,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    };

    const init = async () => {
      await preloadImages(".grid_item-img");

      await delay(1000);

      initScroll();
      initAnimations();
    };

    init();
  }, []);

  return (
    <StackGrid
      className="grid"
      monitorImagesLoaded
      columnWidth={300}
      duration={600}
      gutterWidth={15}
      gutterHeight={15}
      easing={easings.cubicOut}
      appearDelay={60}
      appear={transition.appear}
      appeared={transition.appeared}
      enter={transition.enter}
      entered={transition.entered}
      leaved={transition.leaved}
    >
      {images.map((obj, index) => (
        <figure
          ref={(el) => gridItemsRef.current.push(el)}
          key={index}
          className="grid_item"
        >
          {obj.src ? (
            <img className="grid_item-img" src={obj.src} alt={obj.label} />
          ) : (
            <div
              className="blank-image"
              style={{ width: obj.size, height: obj.size }}
            ></div>
          )}
          <figcaption>{obj.label}</figcaption>
        </figure>
      ))}
    </StackGrid>
  );
};

export default Home;

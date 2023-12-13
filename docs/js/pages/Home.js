/* eslint-disable react/prop-types */
import React from "react";
import StackGrid, { transitions, easings } from "../../../src";

const transition = transitions.scaleDown;

const Home = () => {
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

  getRandomBlankImages(20); // 這裡的數字表示你希望安插多少張空白圖片

  return (
    <StackGrid
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
        <figure key={index} className="image">
          {obj.src ? (
            <img src={obj.src} alt={obj.label} />
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

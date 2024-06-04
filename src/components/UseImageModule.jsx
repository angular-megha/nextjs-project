'use client';

import Image from "next/image";
import myProfile from "../public/images/free-images.jpg";
import styles from "../css/LearnCSSModule.module.css";
// import imageLoader from "../public/images/loading__.gif";


const imageLoader = ({ src, width, quality }) => {
    return `myProfile/${src}?w=${width}&q=${quality || 75}`
  }

const UseImageModule = () => {
  return (
    // <Image src={myProfile} className={styles.bg_image}></Image>
    <Image
      src={myProfile}
      alt="ljfkdsjfjsglkjf"
      width={400}
      height={400}
      placeholder="blur"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //   loader={imageLoader}
    />
  );
};

export default UseImageModule;

import { useState } from "react";
import styles from "../styles/ImageGallery.module.css";

const ImageGallery = ({ images }) => {

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={styles.galleryContainer}>

      {/* LEFT THUMBNAILS */}

      <div className={styles.thumbnailColumn}>

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            alt="thumb"
            className={`${styles.thumbnail} ${
              activeImage === img ? styles.active : ""
            }`}
            onClick={() => setActiveImage(img)}
          />

        ))}

      </div>

      {/* MAIN IMAGE */}

      <div className={styles.mainImageContainer}>

        <img
          src={activeImage}
          alt="product"
          className={styles.mainImage}
        />

      </div>

    </div>
  );
};

export default ImageGallery;
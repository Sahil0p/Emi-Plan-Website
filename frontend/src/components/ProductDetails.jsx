import { useState } from "react";
import styles from "../styles/ProductPage.module.css";

const ProductDetails = ({ product, selectedVariant }) => {

  const images = selectedVariant?.image || [];

  const [activeImage, setActiveImage] = useState(images[0]);

  // If variant changes, ensure active image updates
  if (activeImage !== images[0] && !images.includes(activeImage)) {
    setActiveImage(images[0]);
  }

  return (
    <div className={styles.card}>

      <p className={styles.newBadge}>NEW</p>

      <h1 className={styles.productTitle}>
        {product.name}
      </h1>

      <p className={styles.storage}>
        {selectedVariant?.storage}
      </p>

      <div className={styles.galleryContainer}>

        {/* THUMBNAILS */}

        <div className={styles.thumbnailColumn}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              className={`${styles.thumbnail} ${
                activeImage === img ? styles.activeThumb : ""
              }`}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>

        {/* MAIN IMAGE */}

        <div className={styles.mainImageContainer}>
          <img
            src={activeImage}
            alt={product.name}
            className={styles.productImage}
          />
        </div>

      </div>

      <p className={styles.finishText}>
        Available in {product.variants.length} finishes
      </p>

    </div>
  );
};

export default ProductDetails;
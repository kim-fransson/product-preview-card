import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import CartIcon from "@/assets/icon-cart.svg";

import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { images, category, title, description, price } = product;

  const originalPrice = price.original;
  const discountedPrice = price.original - price.discount;
  const priceUnit = price.unit;
  const hasDiscount = originalPrice !== discountedPrice;
  return (
    <article className={styles.wrapper}>
      <picture className={styles.imageWrapper}>
        <source
          media={`(min-width: 40rem)`}
          srcSet={images.desktop.url}
        />
        <img alt={images.alt} src={images.mobile.url} />
      </picture>

      <div className={styles.innerWrapper}>
        <span className={styles.category}>{category}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceWrapper}>
          <div>
            <VisuallyHidden>Discounted price: </VisuallyHidden>
            <span className={styles.discounted}>
              {priceUnit}
              {discountedPrice}
            </span>
          </div>
          {hasDiscount && (
            <div>
              <VisuallyHidden>Original price: </VisuallyHidden>
              <span className={styles.original}>
                {priceUnit}
                {originalPrice}
              </span>
            </div>
          )}
        </div>
        <button className={styles.button}>
          <CartIcon />
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

import React from "react";
import styles from "./Plant.module.scss";
import Link from "next/link";

export default function PlantCard({
  product: { image, slug, name, price, summary, tags },
}) {
  return (
    <div className={styles["card__container"]}>
      <div className={styles["card__image"]}>
        <img src={image || ""} className={styles.image} alt={name} />
      </div>
      <div className={styles["details-container"]}>
        <div className={styles["details__container"]}>
          <p>{name}</p>
          <p>₹ {price}</p>
        </div>
        <div className={styles["card__summary"]}>{summary}</div>
      </div>
      <span className={styles["card__tag"]}>{tags && tags[0]}</span>
    </div>
  );
}

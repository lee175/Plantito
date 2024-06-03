"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Plants.module.scss";
import PlantCard from "../plantCards";

export default function Plants({ products = [], bestsellers = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    setFilterWork(products);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      //   if (item === "All") {
      //     setFilterWork(products);
      //   } else {
      //     setFilterWork(
      //       products.filter((product) => product.tags.includes(item))
      //     );
      //   }
    }, 500);
  };

  return (
    <section
      className={`${styles["section-plants"]}container padding-top margin-top`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`container margin-top`}>
        <h3 id="plants" className="margin-bottom">
          Plantito Plants
        </h3>
        <div className={styles["app__work-filter"]}>
          {["All", "Indoor", "Outdoor", "Indoor/Outdoor"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={
                activeFilter === item
                  ? `${styles["app__work-filter-item"]} ${styles["item-active"]}`
                  : `${styles["app__work-filter-item"]}`
              }>
              {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.4, delayChildren: 0.4 }}
          className={`${styles["card__container"]}`}>
          {filterWork?.map((product) => (
            <PlantCard product={product} key={product._id} />
          ))}
        </motion.div>
      </motion.div>
      {/*  */}
    </section>
  );
}

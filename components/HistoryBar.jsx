"use client";

import Image from "next/image";
import styles from "./HistoryBar.module.css";

const historyImages = [
  "/images/model1.jpg",
  "/images/model2.jpg",
  "/images/model3.jpg",
  "/images/model4.jpg",
  "/images/model5.jpg",
  "/images/model6.jpg",
  "/images/model7.jfif",
  "/images/model8.jfif",
  "/images/model9.jfif",
  "/images/model10.jfif",
  "/images/model11.jfif",
  "/images/model12.jfif",
  "/images/model13.jfif",
  "/images/model14.jfif",
  "/images/model15.jfif",
  "/images/model16.webp",
  "/images/model17.jfif",
  "/images/model18.jfif",
];

export default function HistoryBar() {
  return (
    <section className={styles["historybar-container"]} aria-label="Generation history">
      <div className={styles["historybar-wrapper"]}>

        {/* History Label */}
        <div className={styles["history-card"]}>
          <p className={styles["history-title"]}>History</p>
          <p className={styles["history-subtitle"]}>View All</p>
        </div>

        {/* Divider */}
        <div className={styles["history-divider"]} aria-hidden="true" />

        {/* Thumbnails */}
        <ul className={styles["history-scroll"]} aria-label="Previously generated images">
          {historyImages.map((item, index) => (
            <li key={index} className={styles["history-image-wrapper"]}>
              <Image
                src={item}
                alt={`History image ${index + 1}`}
                fill
                sizes="90px"
                className={styles["history-image"]}
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
import Image from "next/image";
import staticImages from "@/data/images";
import styles from "./GalleryGrid.module.css";

export default function GalleryGrid({ images, type }) {
  const displayImages = images?.length > 0 ? images : staticImages;

  return (
    <section aria-label="Generated content gallery">
      <ul className={styles["gallery-grid"]}>
        {displayImages.map((item, index) => (
          <li key={index} className={styles["gallery-card"]}>
            {type === "Video" ? (
              <video
                src={item}
                className={styles["gallery-image"]}
                autoPlay
                muted
                loop
                playsInline
                aria-label={`Generated video ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Image
                src={item}
                alt={`Generated image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={styles["gallery-image"]}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
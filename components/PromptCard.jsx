import styles from "./PromptCard.module.css";

export default function PromptCard({ prompt }) {
  const displayText = prompt || "A professional portrait photograph of a smiling 31-year-old redheaded woman with warm brown eyes and softly tousled auburn hair framing her face. She is turned slightly towards the viewer, offering a genuine and approachable expression. She is wearing a cream-colored cashmere sweater and delicate gold earrings. The background is a softly blurred expanse of muted gray and beige tones, suggesting a modern art gallery. There is subtle directional lighting";

  return (
    <section className={styles["prompt-card"]} aria-label="Prompt preview">

      {/* Top empty decorative box */}
      <div className={styles["prompt-card-top-box"]} aria-hidden="true" />

      {/* Text content box */}
      <div className={styles["prompt-card-text-box"]}>
        <p className={styles["prompt-card-text"]}>
          {displayText}
        </p>

        <div className={styles["prompt-card-btn-row"]}>
          <button className={styles["prompt-card-model-btn"]}>Model</button>
        </div>
      </div>

    </section>
  );
}